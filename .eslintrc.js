const allowModules = [
  'react-hot-loader'
]
const errorRules = {
  // 'mocha/no-exclusive-tests': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  'id-blacklist': ['error', 'cx'],
  'import/no-duplicates': 'error',
  'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
  'node/no-extraneous-import': ['error', { allowModules }],
  'node/no-extraneous-require': ['error', { allowModules }],
  'node/no-deprecated-api': [
    'error',
    {
      ignoreModuleItems: ['url.parse']
    }
  ],
  'prefer-const': 'error',
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react-hooks/rules-of-hooks': 'error' // See https://reactjs.org/docs/hooks-rules.html
}
const warningRules = {
  // '@typescript-eslint/ban-ts-ignore': 'warn',
  '@typescript-eslint/no-inferrable-types': 'warn', // Do not type explicitely string, numbers and boolean literals
  'dot-notation': ['warn', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
  'import/no-default-export': 'warn',
  'import/no-deprecated': 'warn',
  'no-negated-condition': 'warn',
  'react/no-deprecated': 'warn',
  'react/no-render-return-value': 'warn',
  'react/react-in-jsx-scope': 'warn',
  'react/jsx-closing-bracket-location': 1
}
const wantedRules = {
  'comma-dangle': 'off',
  'no-use-before-define': 'off', // We often use mapStateToProps/mapDispatchToProps on top and define them at the bottom
  '@typescript-eslint/no-use-before-define': 'off',
  'react/no-unescaped-entities': 'off',
  'react/no-find-dom-node': 'off'
}
const unwantedRules = {
  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-object-literal-type-assertion': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/prefer-interface': 'off',
  'import/no-named-default': 'off',
  'lines-between-class-members': 'off',
  'no-undef': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1116
  'react/display-name': 'off',
  'react/prop-types': 'off',
  camelcase: 'off'
}
const redundantRules = {
  'no-unused-vars': 'off', // TS rule with the same name covers it
  'no-useless-constructor': 'off' // TS rule with the same name covers it
}
const conflictingRules = {
  'standard/computed-property-even-spacing': 'off', // prettier conflict
  'standard/array-bracket-even-spacing': 'off' // prettier conflict
}
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'promise'
  ],
  // overrides: [
  //   {
  //     files: ['*.test.*'],
  //     env: {
  //       mocha: true,
  //     },
  //   },
  // ],
  rules: {
    ...errorRules,
    ...warningRules,
    ...wantedRules,
    ...unwantedRules,
    ...conflictingRules,
    ...redundantRules
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
