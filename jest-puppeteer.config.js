module.exports = {
  server: {
    command: 'npm run build && npm run start:express',
    port: 3000
  },
  launch: {
    headless: process.env.CI === 'true'
  }
}
