// const fs = require('fs')

module.exports = {
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
    '/elements': { page: '/elements' }
  })
}
