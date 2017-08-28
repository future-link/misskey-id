import path from 'path'
import webpack from 'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

// part of non webpack tasks
import fs from 'fs'
import pug from 'pug'

fs.writeFileSync(
    path.resolve('dist', 'index.html'),
    pug.compileFile(path.resolve('app', 'index.pug'))()
)

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
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['app']
        }),*/
    ]
}
