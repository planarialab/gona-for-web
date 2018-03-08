describe('/signin page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/signin')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('signin')
  })
})
