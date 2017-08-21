// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "indent": [2, 4, {"SwitchCase": 1}],
    "space-before-function-paren": [2, "never"],
    "comma-dangle": [2, "never"],
    "radix": 0,
    "func-names": 0,
    "no-console": 0,
    "max-len": 0,
    "no-unused-vars": 1,
    "arrow-body-style": 0,
    "array-callback-return": 0,
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "no-return-assign": 0,
    "consistent-return": 0,
    "no-alert": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/first": 0,
    "no-unused-expressions": 0,
    "arrow-parens": 0,
    "semi": [2, "always"],
    "jsx-quotes": [2, "prefer-double"],
    "object-curly-spacing": [2, "always"],
    "space-unary-ops": [2, {
        "words": true,
        "nonwords": true,
        "overrides": {
          "!": false,
          "!!": false,
          "-": false
        }
      }
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': ["error", "windows"]
  }
}
