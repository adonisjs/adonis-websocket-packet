import pkg from './package.json'

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.browser,
      name: 'adonis.wsp',
      format: 'umd'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: require('./rollup.plugins.js')
}
