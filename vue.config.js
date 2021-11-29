module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: process.env.NODE_ENV == 'production',
  devServer: {
    // proxy: 'http://localhost:8000'
    proxy: {
      '/thomas': {
        target: 'http://localhost:8000',
        pathRewrite:{'^/thomas':''}
        // ws: true,
        // changeOrigin: true //用于请求头中的host值
      },
    }
  }
}