import {
  resolve,
  basename,
  gulp,
  rimrafSync,
  rollup,
  nodeResolve,
  commonjs,
  esbuild,
  camelCase,
  parseJson,
  glob,
  format,
  consola,
  chalk,
  JSDOM,
  vuePlugin,
  vueJsx,
  readFileSync,
  writeFileSync,
  emptyDir,
  ensureDir,
  ensureDirSync,
} from '../utils'

import { dts } from '../plugins/build-dts'

import { iconsRoot } from '../utils'

import type { BuiltInParserName } from 'prettier'

const { series } = gulp

const pkgPath = resolve(iconsRoot, 'package.json')
const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

const scopeNames: string[] = ['other']

const getSvgFiles = async (): Promise<string[]> => {
  const files = await glob('svg/*.svg', {
    cwd: iconsRoot,
    absolute: true,
    onlyFiles: true,
  })
  return files
}

const getSvgName = (
  file: string
): { scopeName: string; componentFilename: string; componentName: string } => {
  const filename = basename(file).replace('.svg', '')

  const scopeName = filename.match(/(?<=^\()[a-z]+(?=\))/)?.[0] || ''
  const componentFilename = filename.replace(`(${scopeName})`, '')

  const componentName = camelCase(componentFilename, { pascalCase: true })
  return {
    scopeName,
    componentFilename,
    componentName,
  }
}

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const formatSVG = async () => {
  rimrafSync(resolve(iconsRoot, 'dist'))
  const files = await getSvgFiles()

  files.forEach((file) => {
    const content = readFileSync(file, 'utf-8')
    const { scopeName, componentFilename } = getSvgName(file)

    const svg = new JSDOM(content)
    const document = svg.window.document

    const svgdom = document.getElementsByTagName('svg')[0]
    const pathdom = document.getElementsByTagName('path')[0]
    const rectdom = document.getElementsByTagName('rect')[0]

    const viewBox = document.getElementsByTagName('svg')[0].getAttribute('viewBox')

    pathdom.setAttribute('fill', 'currentColor')
    pathdom.removeAttribute('id')

    rectdom && svgdom.removeChild(rectdom)

    const pathHTML = svgdom.innerHTML

    const svgElement = formatCode(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${pathHTML}</svg>`,
      'html'
    )

    writeFileSync(
      resolve(`${iconsRoot}/svg`, `${scopeName ? `(${scopeName})` : ''}${componentFilename}.svg`),
      svgElement,
      'utf-8'
    )
    consola.success(chalk.green(`SVG: ${chalk.bold(`/svg/${componentFilename}.svg`)}`))
  })
}

const transformToVueComponent = async () => {
  await emptyDir(`${iconsRoot}/components`)
  await ensureDir(`${iconsRoot}/components/other`)

  const files = await getSvgFiles()

  files.forEach((file) => {
    const content = readFileSync(file, 'utf-8')
    const { scopeName, componentFilename, componentName } = getSvgName(file)

    if (scopeName) {
      if (!scopeNames.includes(scopeName)) {
        scopeNames.push(scopeName)
      }
      ensureDirSync(`${iconsRoot}/components/${scopeName}`)
    }

    const vue = formatCode(
      `
    <template>
    ${content}
    </template>

    <script lang="ts">
    import type { DefineComponent } from 'vue'
    export default ({
      name: "${componentName}",
    }) as DefineComponent
    </script>`,
      'vue'
    )
    writeFileSync(
      resolve(`${iconsRoot}/components/${scopeName || 'other'}`, `${componentFilename}.vue`),
      vue,
      'utf-8'
    )
    consola.success(
      chalk.green(
        `SFC: ${chalk.bold(`/components/${scopeName || 'other'}/${componentFilename}.vue`)}`
      )
    )
  })
}

const generateEntry = async () => {
  const exportComponents: string[] = []

  scopeNames.forEach((scope) => {
    const files = glob.sync(`components/${scope}/*.vue`, {
      cwd: iconsRoot,
      absolute: true,
      onlyFiles: true,
    })

    const exportComponent = formatCode(
      files
        .map((file) => {
          const filename = basename(file).replace('.vue', '')
          const componentName = camelCase(filename, { pascalCase: true })
          exportComponents.push(
            `export { default as ${componentName} } from './${scope}/${filename}.vue'`
          )
          return `export { default as ${componentName} } from './${filename}.vue'`
        })
        .join('\n')
    )
    writeFileSync(resolve(`${iconsRoot}/components/${scope}`, 'index.ts'), exportComponent, 'utf-8')

    // exportComponents.push(`export * from './${scope}'`)
  })

  exportComponents.join('\n')
  writeFileSync(
    resolve(`${iconsRoot}/components`, 'index.ts'),
    exportComponents.join('\n'),
    'utf-8'
  )
  consola.success(chalk.green(`SVG: ${chalk.bold('/components/index.ts')}`))
}

const buildSvgComponent = async () => {
  const bundle = await rollup({
    input: resolve(iconsRoot, 'index.ts'),
    plugins: [
      vuePlugin({
        isProduction: false,
      }),
      vueJsx(),
      nodeResolve({
        modulePaths: [resolve(iconsRoot, 'node_modules')],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'ESNext',
        loaders: {
          '.vue': 'ts',
        },
      }),
      dts({
        compilerOptions: {
          emitDeclarationOnly: true,
          preserveSymlinks: true,
          skipLibCheck: true,
          noImplicitAny: false,
        },
        tsConfigFilePath: resolve(iconsRoot, 'tsconfig.json'),
        injectFiles: [resolve(iconsRoot, 'env.d.ts')],
      }),
    ],
    external: [...Object.keys(pkg.devDependencies || {})],
    watch: {
      exclude: ['./node_modules/**', './dist/**'],
    },
    treeshake: false,
  })
  bundle.write({
    format: 'esm',
    file: resolve(iconsRoot, 'dist/index.js'),
    sourcemap: true,
  })
}

export const buildIcons = series(
  formatSVG,
  transformToVueComponent,
  generateEntry,
  buildSvgComponent
)
