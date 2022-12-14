module.exports = {
  extends: ['standard', 'plugin:prettier/recommended', 'prettier', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['off', 'single'],
    semi: ['error', 'always'],
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'no-unused-vars': 'off',
    'no-process-exit': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    'arrow-parens': 'off',
    'no-nested-ternary': 'off',
    'function-paren-newline': 'off',
    'prefer-const': 'error',
    indent: 'off',
    'node/no-extraneous-require': 'off',
    camelcase: 'off',
    'no-path-concat': 'off',
    'no-multi-str': 'off',
    'no-useless-catch': 'off',
    'no-unused-expressions': 'off',
    'new-cap': 'off',
  },
};
