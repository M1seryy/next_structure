import { test, expect } from '@playwright/test'

test.describe('Header Tests', () => {
    test('header nav links should be visible', async ({ page }) => {
        await page.goto('/')

        await page.waitForLoadState('networkidle')

        const header = page.locator('header')
        await expect(header).toBeVisible()

        const homeLink = page.locator('a[href="/"]')
        const booksLink = page.locator('a[href="/book-list"]')

        await expect(homeLink).toBeVisible()
        await expect(booksLink).toBeVisible()


        await expect(homeLink).toContainText('Home')
        await expect(booksLink).toContainText('Books')
    })

    test('book-list page should navigate', async ({ page }) => {
        await page.goto('/')

        await page.waitForLoadState('networkidle')

        await page.click('a[href="/book-list"]')

        await expect(page).toHaveURL(/.*book-list/)
    })

    test('should navigate back to home when clicking Home link', async ({ page }) => {
        await page.goto('/book-list')

        await page.waitForLoadState('networkidle')

        await page.click('a[href="/"]')

        await expect(page).toHaveURL(/.*\/$/)
    })
})
