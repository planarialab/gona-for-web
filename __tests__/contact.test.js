describe('/contact page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/contact')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('contact')
  })
})
