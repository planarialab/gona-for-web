module.exports = {
  server: {
    command: 'npm run dev:express',
    port: 4444
  },
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  }
}
