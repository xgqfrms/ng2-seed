plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor', 'polyfills']
  }),

  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
]
