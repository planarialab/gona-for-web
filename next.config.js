const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

module.exports = withSass(
  withOffline({
    webpack: (config, options) => {
      return config
    }
  })
)
