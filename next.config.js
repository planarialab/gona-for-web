// const fs = require('fs')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
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
