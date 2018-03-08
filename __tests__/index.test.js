describe('/ (Home Page)', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('Homepage')
  })

  it('should click using selector', async () => {
    await expect(page).toClick('a[href="/signin"]')
    const { pathname } = await page.evaluate(() => document.location)
    expect(pathname).toBe('/signin')
  })
})
