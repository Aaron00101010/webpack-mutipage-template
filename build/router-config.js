const routerConfig = [
  { path: '/', page: '/page/index/index.html' },
  { path: '/list', page: '/page/list/list.html' },
  { path: '/detail', page: '/page/detail/detail.html' }
]
const webpackRouterConfig = {
  devServer: {
    historyApiFallback: {
      rewrites: routerConfig.map(item => {
        return { from: new RegExp(`^${item.path}/?$`), to: item.page }
      })
    }
  }
}

module.exports = {
  routerConfig,
  webpackRouterConfig
}
