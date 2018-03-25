describe('/ (Home Page)', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('Planaria Lab')
  })

  it('should click using selector', async () => {
    await expect(page).toClick('a', { text: 'Sign in' })
    const { pathname } = await page.evaluate(() => document.location)
    expect(pathname).toBe('/signin')
  })
})
