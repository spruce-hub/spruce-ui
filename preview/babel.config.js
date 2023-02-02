module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'auto',
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
}
