import path from 'path'
import webpack from 'webpack'

export default {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: process.env.NODE_ENV
            }
        })
    ]
}
