module.exports = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '~components/*': ['./src/components/*'],
      '~utils/*': ['./src/utils/*'],
      '~hooks/*': ['./src/hooks/*'],
      '~src/*': ['./src/*'],
      '~static/*': ['./static/*'],
    },
  },
};
