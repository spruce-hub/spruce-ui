import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { cwd } from 'node:process'

import consola from 'consola'
import chalk from 'chalk'
import { format } from 'prettier'

import type { BuiltInParserName } from 'prettier'

const projectRoot = cwd()

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const create = async () => {
  if (!existsSync(`${projectRoot}/src/App.vue`)) {
    const sfc = await formatCode(
      `
      <script setup lang="ts">
        import { CAlert } from '@cui/index'
        import Preview from './components/Preview.vue'
      </script>
      
      <template>
        <Preview>
          <CAlert type="success" description="success alert" closable="center" />
          <CAlert type="warning" description="warning alert" closable="center" />
          <CAlert type="error" description="error alert" closable="center" />
          <CAlert type="info" description="info alert" closable="center" />
        </Preview>
      </template>
      
      <style lang="scss" scoped>
      .ys-alert {
        margin: 5px 0;
      }
      </style>`,
      'vue',
    )
    writeFile('src/App.vue', sfc, 'utf-8')
    consola.success(chalk.green('index: src/App.vue'))
  }
}

create()
