module.exports = {
  extends: [
    'airbnb',
    'plugin:compat/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['compat', 'import', 'prettier', 'promise', 'react', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/core-modules': [],
    // "import/ignore": ["util/style/index.js", "util/test/index.jsx"],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./src'],
      },
      alias: {
        map: [
          ['~style', './src/style'],
          ['~components', './src/components'],
          ['~context', './src/context'],
          ['~templates', './src/templates'],
          ['~util', './src/util'],
          ['~static', './static'],
          ['~src', './src'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'warn',
    'react/no-danger': 'off',
    'react/display-name': 'error',
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.{test,stories}.{js,jsx}'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
  },
}
