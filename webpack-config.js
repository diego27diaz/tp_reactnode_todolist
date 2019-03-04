import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpackLivereloadPlugin from 'webpack-livereload-plugin';

export default{
  entry: './src/client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ ,
        exclude: '/node_modules/'
      },
      {
        use: ['css-loader','style-loader'],
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options:{
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options:{
              sourceMap: true
            }
          }
        ],
        test: /\.scss$/
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new webpackLivereloadPlugin()
  ]
}
