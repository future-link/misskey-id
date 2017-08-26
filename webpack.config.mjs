import path from 'path'
import webpack from 'webpack'

export default {
    entry: {
        'app': path.resolve('app', 'app.mjs')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV == 'production' ? process.env.NODE_ENV : 'development')
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                props: true
            }
        })
    ]
}
