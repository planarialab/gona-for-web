describe('/pricing page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/pricing')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('pricing')
  })
})
