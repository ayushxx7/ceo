import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have a navigation bar with all links', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    const navLinks = await nav.locator('a').allTextContents();
    expect(navLinks).toContain('home');
    expect(navLinks).toContain('about');
    expect(navLinks).toContain('experience');
    expect(navLinks).toContain('accomplishments');
    expect(navLinks).toContain('projects');
    expect(navLinks).toContain('digital shelf');
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'about', exact: true }).click();
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByText('$ whoami')).toBeVisible();
  });

  test('should navigate to experience page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'experience', exact: true }).click();
    await expect(page).toHaveURL(/.*\/experience/);
    await expect(page.getByText('$ ls ~/career/')).toBeVisible();
  });

  test('should navigate to accomplishments page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'accomplishments', exact: true }).click();
    await expect(page).toHaveURL(/.*\/accomplishments/);
    await expect(page.getByText('$ ls -t ~/accomplishments/')).toBeVisible();
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'projects', exact: true }).click();
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.getByText('$ ls ~/projects/')).toBeVisible();
  });

  test('should navigate to shelf page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'digital shelf', exact: true }).click();
    await expect(page).toHaveURL(/.*\/shelf/);
    await expect(page.getByText('cd ~/shelf/blogs')).toBeVisible();
  });

  test('should navigate back to home from any page', async ({ page }) => {
    await page.goto('/about');
    await page.getByRole('link', { name: 'home', exact: true }).click();
    await expect(page).toHaveURL(/.*\/$/);
    await expect(page.locator('div.bg-black.border-green-500')).toBeVisible();
  });
});
