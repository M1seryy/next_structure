import { test, expect } from '@playwright/test'

test.describe('Header Tests', () => {
    test('should display navigation links', async ({ page }) => {
        await page.goto('/')
        await page.waitForLoadState('networkidle')

        const navigation = page.locator('nav')
        await expect(navigation).toBeVisible()

        const homeLink = page.locator('a[href="/"]')
        await expect(homeLink).toBeVisible()
        await expect(homeLink).toContainText('Home')

        const booksLink = page.locator('a[href="/book-list"]')
        await expect(booksLink).toBeVisible()
        await expect(booksLink).toContainText('Books')
    })

    test('should navigate to book-list page', async ({ page }) => {
        await page.goto('/')
        await page.waitForLoadState('networkidle')

        await page.click('a[href="/book-list"]')

        await expect(page).toHaveURL(/.*book-list/)
    })

    test('should navigate back to home page', async ({ page }) => {
        await page.goto('/book-list')
        await page.waitForLoadState('networkidle')

        await page.click('a[href="/"]')

        await expect(page).toHaveURL(/.*\/en\/?$/)
    })
})
