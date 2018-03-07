describe('/about page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/about')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('about')
  })
})
