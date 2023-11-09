// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173'

test('has title', async ({ page }) => {
  await page.goto(URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(textContent).not.toBeNull()
  expect(imageSrc).not.toBeNull()
  expect(imageSrc?.startsWith('https://cataas.com')).toBeTruthy()
})
