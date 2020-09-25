module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': [0, 'never'],
    strict: [2, 'global'],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-infix-ops': 2,
    'spaced-comment': [2, 'always'],
    'arrow-spacing': 2,
    'no-var': 0,
    'no-undef': 1,
    'no-unused-vars': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
