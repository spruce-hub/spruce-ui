import { exit } from 'node:process'
import { writeFile } from 'node:fs/promises'

import { ensureDir } from 'fs-extra'
import consola from 'consola'
import chalk from 'chalk'
import { format } from 'prettier'

import type { BuiltInParserName } from 'prettier'

const libs = ['eui']

if (process.argv.length < 4) {
  console.log('输入你要创建的组件所属的库以及组件名称')
  console.log(`存在以下组件库: ${libs}`)
  exit(1)
}

const libName = process.argv.at(-2)

if (libName && !libs.includes(libName)) {
  console.log(`不存在名为: ${libName} 的组件库`)
  console.log(`以下是可使用的组件库: ${libs}`)
  exit(1)
}

const namespace = libName?.[0].toUpperCase()

const name = process.argv.at(-1)

const CamelCaseName = (name || '')
  .split('-')
  .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1))
  .join('')

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const create = async () => {
  const index = await formatCode(
    `
    import type { App, Plugin } from 'vue'
    import ${CamelCaseName} from './src/${name}.vue'
    import '@eui/components/${name}/style/css'

    export const ${CamelCaseName}Plugin: Plugin = {
      install(app: App) {
        app.component('${namespace}${CamelCaseName}', ${CamelCaseName})
      },
    }

    export const ${namespace}${CamelCaseName} = ${CamelCaseName}`,
    'typescript',
  )
  writeFile(`packages/${libName}/components/${name}/index.ts`, index, 'utf-8')
  consola.success(chalk.green(`index: packages/${libName}/components/${name}/index.ts`))
}

const createTEST = async () => {
  const test = await formatCode(
    `
      import { describe, expect, it } from 'vitest'
      import { mount } from '@vue/test-utils'

      import ${CamelCaseName} from '../../src/${name}.vue'

      describe('${CamelCaseName}', () => {})`,
    'typescript',
  )
  writeFile(`packages/${libName}/components/${name}/__tests__/unit/${name}.spec.tsx`, test, 'utf-8')
  consola.success(
    chalk.green(`test: packages/${libName}/components/${name}/__tests__/unit/${name}.spec.tsx`),
  )
}

const createSRC = async () => {
  const sfc = await formatCode(
    `
    <script setup lang="ts">
      import { ${CamelCaseName}Props } from './${name}'
      import { useNamespace } from '@spruce-hub/ui-hooks'

      const props = defineProps(${CamelCaseName}Props)

      const { bem, is } = useNamespace('${name}')
    </script>

    <template></template>`,
    'vue',
  )

  const ts = await formatCode(
    `
    export const ${CamelCaseName}Props = {}`,
    'typescript',
  )

  writeFile(`packages/${libName}/components/${name}/src/${name}.vue`, sfc, 'utf-8')
  writeFile(`packages/${libName}/components/${name}/src/${name}.ts`, ts, 'utf-8')
  consola.success(chalk.green(`src: packages/${libName}/components/${name}/src/${name}.vue`))
  consola.success(chalk.green(`src: packages/${libName}/components/${name}/src/${name}.ts`))
}

const createSTYLE = async () => {
  const css = await formatCode(
    `
    import '@spruce-hub/chalk'
    import '@${libName}/styles/ys-${name}.css'`,
    'typescript',
  )

  const index = await formatCode(
    `
    import '@spruce-hub/chalk/scss/index.scss'
    import '@${libName}/styles/scss/${name}.scss'`,
    'typescript',
  )

  const scss = await formatCode(
    `
    @use './mixins/mixins' as *;

    $block: '${name}'

    @include b(){}`,
    'scss',
  )

  writeFile(`packages/${libName}/components/${name}/style/css.ts`, css, 'utf-8')
  writeFile(`packages/${libName}/components/${name}/style/index.ts`, index, 'utf-8')
  writeFile(`packages/${libName}/styles/${name}.scss`, scss, 'utf-8')
  consola.success(chalk.green(`style: packages/${libName}/components/${name}/style/css.ts`))
  consola.success(chalk.green(`style: packages/${libName}/components/${name}/style/index.ts`))
  consola.success(chalk.green(`style: packages/${libName}/styles/${name}.scss`))
}

const createDIR = async () => {
  await ensureDir(`packages/${libName}/components/${name}/__tests__/unit`)
  await ensureDir(`packages/${libName}/components/${name}/src`)
  await ensureDir(`packages/${libName}/components/${name}/style`)
  create()
  createTEST()
  createSRC()
  createSTYLE()
}

createDIR()
