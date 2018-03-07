describe('/ (Home Page)', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('This is Massively')
  })

  it('should click using selector', async () => {
    await expect(page).toClick('a[href="/about"]')
    const { pathname } = await page.evaluate(() => document.location)
    expect(pathname).toBe('/about')
  })
})
