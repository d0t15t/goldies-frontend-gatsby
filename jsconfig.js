module.exports = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '~components/*': ['./src/components/*'],
      '~context/*': ['./src/context/*'],
      '~templates/*': ['./src/templates/*'],
      '~utils/*': ['./src/utils/*'],
      '~hooks/*': ['./src/hooks/*'],
      '~styles/*': ['./src/style/*'],
      '~src/*': ['./src/*'],
      '~static/*': ['./static/*'],
    },
  },
};
