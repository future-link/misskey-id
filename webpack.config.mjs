import path from 'path'
import webpack from 'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

// webpack configurations
export default {
    entry: {
        'app': [path.resolve('app', 'bootstrap.mjs')]
    },
    output: {
        path: path.resolve('dist', 'assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV == 'production' ? process.env.NODE_ENV : 'development')
                }
            }
        }),
        new UglifyJsPlugin()
    ]
}
