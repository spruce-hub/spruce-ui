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
  if (!existsSync(`${projectRoot}/pages/index.vue`)) {
    const sfc = await formatCode(
      `
      <script setup lang="ts">
      import { EHeaderMenu } from '@spruce-hub/eui'
      const navs = [
        { value: '首页', linkTo: '' },
        { value: '使用指南', linkTo: 'guide' },
        { value: '电商系统', linkTo: 'eui' },
        { value: '图标库', linkTo: 'icons' },
        { value: '样式库', linkTo: 'chalk' },
        { value: '不是路由', linkTo: '' },
      ]
      </script>

      <template>
        <Preview>
          <EHeaderMenu :navs="navs">
            <template #header-left>
              <div class="ys-logo">
                <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
              </div>
            </template>
            <template #header-right>
              <div class="ys-logo">
                <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
              </div>
            </template>
          </EHeaderMenu>
        </Preview>
      </template>

      <style lang="scss" scoped>
      .ys-logo {
        height: 58px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      </style>`,
      'vue',
    )
    writeFile('pages/index.vue', sfc, 'utf-8')
    consola.success(chalk.green('index: pages/index.vue'))
  }
}

create()
