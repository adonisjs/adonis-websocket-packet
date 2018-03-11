module.exports = [
  require('rollup-plugin-babel')({
    exclude: 'node_modules/**',
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
