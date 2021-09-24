module.exports = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '~components/*': ['./src/components/*'],
      '~templates/*': ['./src/templates/*'],
      '~utils/*': ['./src/utils/*'],
      '~hooks/*': ['./src/hooks/*'],
      '~src/*': ['./src/*'],
      '~static/*': ['./static/*'],
    },
  },
};
