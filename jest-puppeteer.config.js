module.exports = {
  server: {
    command: 'NODE_ENV=development node server.js',
    port: 3000
  },
  launch: {
    headless: process.env.CI === 'true'
  }
}
