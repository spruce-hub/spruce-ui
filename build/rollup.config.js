// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json' assert { type: 'json' }

export default {
  input: './gulpfile.ts',
  plugins: [typescript({ tsconfig: './tsconfig.json' }), nodeResolve(), commonjs()],
  output: {
    format: 'esm',
    dir: './dist',
    preserveModules: true,
  },
  external: [
    ...Object.keys(pkg.devDependencies),
    ...Object.keys(pkg.dependencies),
    'vue/compiler-sfc',
  ],
  watch: {
    exclude: ['./node_modules/**', './dist/**'],
  },
}
