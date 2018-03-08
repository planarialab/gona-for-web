describe('/signout page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/signout')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('signout')
  })
})
