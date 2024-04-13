module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // React specific
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }], // Allow jsx syntax in js files
    'react/jsx-uses-react': 'off', // Not necessary for React 17+
    'react/react-in-jsx-scope': 'off', // Not necessary for React 17+

    // Best practices
    'curly': 'error', // Require curly braces around blocks
    'no-console': 'warn', // Warning for console statements
    'no-unused-vars': 'warn', // Warns on unused variables
    'eqeqeq': ['error', 'always'], // Require the use of === and !==
    'no-multi-spaces': 'error', // Disallow multiple spaces
    'camelcase': 'error', // Enforce camelCase naming convention
    'no-array-constructor': 'warn', // Disallow Array constructors
    'block-spacing': ['error', 'always'], // Enforce spacing inside of blocks

    // Style
    'comma-dangle': ['error', 'always-multiline'], // Require or disallow trailing commas
    'semi': ['error', 'always'], // Require semicolons
    'quotes': ['error', 'single'], // Enforce the consistent use of single quotes
    'indent': ['error', 2], // Enforce a consistent indentation of 2 spaces
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};