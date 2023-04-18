import { exit } from 'node:process'
import { writeFile } from 'node:fs/promises'

import { ensureDir } from 'fs-extra'
import consola from 'consola'
import chalk from 'chalk'
import { format } from 'prettier'

import type { BuiltInParserName } from 'prettier'

const libs = ['cui', 'mui']

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

const componentName = name ? name.slice(0, 1).toUpperCase() + name.slice(1) : ''

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const create = async () => {
  const index = formatCode(
    `
    import type { App, Plugin } from 'vue'
    import ${componentName} from './src/${name}.vue'
    
    export const ${componentName}Plugin: Plugin = {
      install(app: App) {
        app.component('${namespace}${componentName}', ${componentName})
      },
    }
    
    export const ${namespace}${componentName} = ${componentName}`,
    'typescript'
  )
  writeFile(`packages/${libName}/components/${name}/index.ts`, index, 'utf-8')
  consola.success(chalk.green(`index: packages/${libName}/components/${name}/index.ts`))
}

const createTEST = async () => {
  const test = formatCode(
    `
      import { describe, expect, it } from 'vitest'
      import { mount } from '@vue/test-utils'
  
      import ${componentName} from '../../src/${name}.vue'
  
      describe('${componentName}', () => {})`,
    'typescript'
  )
  writeFile(`packages/${libName}/components/${name}/__tests__/unit/${name}.spec.tsx`, test, 'utf-8')
  consola.success(
    chalk.green(`test: packages/${libName}/components/${name}/__tests__/unit/${name}.spec.tsx`)
  )
}

const createSRC = async () => {
  const sfc = formatCode(
    `
    <script setup lang="ts">
      import { ${name}Props } from './${name}'
      import { className } from '@${libName}/utils'

      const props = defineProps(${name}Props)

      const { b, e, m, bem, s } = className('${name}')
    </script>

    <template></template>`,
    'vue'
  )

  const ts = formatCode(
    `
    export const ${name}Props = {}`,
    'typescript'
  )

  writeFile(`packages/${libName}/components/${name}/src/${name}.vue`, sfc, 'utf-8')
  writeFile(`packages/${libName}/components/${name}/src/${name}.ts`, ts, 'utf-8')
  consola.success(chalk.green(`src: packages/${libName}/components/${name}/src/${name}.vue`))
  consola.success(chalk.green(`src: packages/${libName}/components/${name}/src/${name}.ts`))
}

const createSTYLE = async () => {
  const css = formatCode(
    `
    import '@${libName}/styles/base.css'
    import '@${libName}/styles/${libName?.[0]}-${name}.css'`,
    'typescript'
  )

  const index = formatCode(
    `
    import '@${libName}/styles/scss/base.scss'
    import '@${libName}/styles/scss/${name}.scss'`,
    'typescript'
  )

  const scss = formatCode(
    `
    @use './mixins/mixins' as *;

    .#{$namespace}-${name} {}`,
    'scss'
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