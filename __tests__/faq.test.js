describe('/faq page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/faq')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('faq')
  })
})
