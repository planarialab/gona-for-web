const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

module.exports = withSass(
  withOffline({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }

      return config
    },
    exportPathMap: () => ({
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/elements': { page: '/elements' },
      '/example': { page: '/example' },
      '/posts': { page: '/posts' }
    })
  })
)
