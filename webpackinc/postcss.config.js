/* eslint-disable import/no-commonjs, global-require */

module.exports = function() {
    return  {
        parser: 'sugarss',
        exec: true,
        plugins: {
            'postcss-flexbugs-fixes': {},
            'postcss-nested': {},
            'postcss-import': {},
            'postcss-use': {modules: '*'},
            'postcss-at-rules-variables': {},
            'postcss-simple-vars': {},
            'postcss-calc': {},
            'postcss-conditionals': {},
            'postcss-color-function': {},
            'postcss-image-set-polyfill': {},
            'postcss-colour-functions': {},
            'postcss-custom-media': {},
        },
    };
}
