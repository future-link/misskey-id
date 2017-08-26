import path from 'path'
import webpack from 'webpack'

export default {
    entry: {
        'app': path.resolve('app', 'app.mjs'),
        'app2': path.resolve('app', 'app2.mjs')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : 'development')
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['app', 'app2']
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                props: true
            }
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
