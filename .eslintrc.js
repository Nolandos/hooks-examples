module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                ],
            },
        },
    },
    rules: {
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx']}], // allow display html in js files
        'react/state-in-constructor': [1, 'always'], // disable required constructor for state
        'object-curly-spacing': [1, 'never'], // Intellij spaces in objects
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/prop-types': 0,
        'import/prefer-default-export': 'off',
        'react/button-has-type': 'off',
        'react/jsx-props-no-spreading': 'off',
        'object-curly-newline': 'off',
        'no-unused-expressions': [2, {allowShortCircuit: true}],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'max-len': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
    },
};
