module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
    'no-plusplus': 'off',
    'radix': ["error", "as-needed"],
    "no-param-reassign": [2, { "props": false }]
  },
};
