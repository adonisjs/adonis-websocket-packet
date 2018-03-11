module.exports = [
  require('rollup-plugin-babel')({
    exclude: 'node_modules/**',
    plugins: ['external-helpers'],
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ]
  })
]
