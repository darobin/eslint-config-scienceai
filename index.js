
module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    mocha: true,
    node: true,
  },
  rules: {
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-shadow': ['error', { allow: ['err', 'error', 'res', 'resp', 'body'] }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-cond-assign': ['error', 'except-parens'],
    'prefer-const': 0,
    'prefer-template': 0,
    'func-names': 0,
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'new-cap': 0,
    'jsx-quotes': 0,
    'react/jsx-space-before-closing': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-indent': 0,
    'react/jsx-boolean-value': 0,
    'react/no-multi-comp': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-key': ['error'],
    'react/no-danger': 0,
    'react/no-direct-mutation-state': ['error'],
    'react/sort-comp': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-filename-extension': 0,
    'space-before-function-paren': 0,
    'one-var': 0,
    // in practice, people indent responsibly - this rule is too inflexible for many justified cases
    indent: 0,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'comma-style': ['error', 'last', { exceptions: { VariableDeclaration: true } }],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-use-before-define': 0,
    'brace-style': 0,
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'no-multi-spaces': 0,
    'comma-dangle': 0,
    'no-confusing-arrow': 0,
    'template-curly-spacing': 0,
    'no-plusplus': 0,
    'jsx-a11y/img-redundant-alt': 0,
  }
};
