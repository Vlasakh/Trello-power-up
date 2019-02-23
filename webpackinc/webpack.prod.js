/* eslint-disable import/no-commonjs, global-require,import/unambiguous */
// noinspection NodeJsCodingAssistanceForCoreModules
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');

// const postcssConfig = require('./webpackinc/postcss.config.js'); todo: вынести конфиги отдельно

const baseDir = `${__dirname}/../`;

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
});

const babelOptions = {
    ignore: ['node_modules/**', 'react/dst/**'],
    presets: [['env', {
        targets: {
            node: 'current',
            // uglify: true,
        },
    }], 'react', 'flow'],
    plugins: [
        ['transform-decorators-legacy'],
        ['transform-class-properties', { spec: 'true' }],
        ['react-html-attrs'],
        ['remove-comments'],
        ['transform-object-rest-spread'],
        ['transform-react-remove-prop-types', { ignoreFilenames: ['node_modules'] }],
    ],
};

module.exports = {
    entry: {
        bundler: [path.resolve(baseDir, './src/index.js')],
        bundlev: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'react-router',
        ],
    },
    output: {
        path: path.resolve(baseDir, './public/assets/min/'),
        filename: '[name].min.js',
    },
    resolve: {
        alias: {
            App: path.resolve(baseDir, 'app'),
            Actions: path.resolve(baseDir, 'app/actions'),
            Api: path.resolve(baseDir, 'app/api'),
            Components: path.resolve(baseDir, 'app/components'),
            Containers: path.resolve(baseDir, 'app/containers'),
            Constants: path.resolve(baseDir, 'app/constants'),
            Core: path.resolve(baseDir, 'app/core'),
            Types: path.resolve(baseDir, 'app/flowTypes'),
            Src: path.resolve(baseDir, 'src'),
            Stores: path.resolve(baseDir, 'app/stores'),
            Utils: path.resolve(baseDir, 'app/core/utils'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules([\\/]*jss*|!?[\\/]css-vendor*|!?[\\/]react-swipe-component*)/,
                loader: 'babel-loader',
                options: babelOptions,
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules([\\/]*jss*|!?[\\/]css-vendor*|!?[\\/]react-swipe-component*)/,
                loader: 'babel-loader',
                options: babelOptions,
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                modules: true,
                                localIdentName: '[hash:base64:5]',
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: false,
                            },
                        },
                    ],
                }),

            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            minimize: true,
                            sourceMap: true,
                            localIdentName: '[hash:base64:4]',
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                                require('postcss-global-import')({ sync: true }),
                                require('postcss-nested')(),
                                require('postcss-import'),
                                require('postcss-use')({ modules: '*' }),
                                require('postcss-at-rules-variables'),
                                require('postcss-simple-vars'),
                                require('postcss-calc'),
                                require('postcss-conditionals'),
                                require('postcss-color-function'),
                                require('postcss-image-set-polyfill'),
                                require('postcss-colour-functions'),
                                require('postcss-custom-media'),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                include: path.resolve(baseDir, './public'),
                exclude: /node_modules/,
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]',
            },
        ],
    },
    plugins: [
        new WebpackNotifierPlugin({ title: 'bundler.js', alwaysNotify: true }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'bundlev',
            minChunks: Infinity,
        }),

        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: true,
            },
        }),

        extractSass,

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /node_modules/,
            uglifyOptions: {
                compress: true,
            },
        }),
    ],
};
