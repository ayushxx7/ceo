import { test, expect } from '@playwright/test';

test.describe('Terminal Window Chrome', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(5000); // Wait for typing animation
  });

  test('should have traffic light buttons (red, yellow, green dots)', async ({ page }) => {
    const terminal = page.locator('div.bg-black.border-green-500');
    await expect(terminal).toBeVisible();

    // Traffic light buttons should be present
    const redDot = page.locator('div.w-3.h-3.bg-red-500.rounded-full').first();
    const yellowDot = page.locator('div.w-3.h-3.bg-\\[\\#fbbf24\\], div.w-3.h-3.bg-yellow-400.rounded-full').first();
    const greenDot = page.locator('div.w-3.h-3.bg-green-400.rounded-full').first();

    await expect(redDot).toBeVisible();
    await expect(yellowDot).toBeVisible();
    await expect(greenDot).toBeVisible();
  });

  test('should have a title bar with filename', async ({ page }) => {
    // Title bar should display a filename like "welcome.sh" or similar
    const titleBar = page.locator('[data-testid="terminal-title"], div.text-green-400.font-mono.text-sm, div.flex.items-center.px-3').first();
    // At minimum, there should be some title text in the window chrome area
    const terminalContainer = page.locator('div.bg-black.border-green-500');
    const titleText = terminalContainer.locator('text=welcome.sh').first();
    await expect(titleText).toBeVisible();
  });

  test('should have window chrome above terminal content', async ({ page }) => {
    const terminal = page.locator('div.bg-black.border-green-500');
    // The terminal should have a title bar section above the content
    const titleBar = terminal.locator('div.border-b, div[class*="border-b"]').first();
    await expect(titleBar).toBeVisible();
  });

  test('should maintain all existing terminal content after chrome addition', async ({ page }) => {
    // All original content should still be present
    await expect(page.getByText("Hey, I'm").first()).toBeVisible();
    await expect(page.getByText('Ayush Mandowara', { exact: true })).toBeVisible();
    await expect(page.getByText('7+ years experience')).toBeVisible();
    await expect(page.getByText('ayushxx7@gmail.com')).toBeVisible();
  });

  test('should have rounded corners like a real window', async ({ page }) => {
    const terminal = page.locator('div.bg-black.border-green-500');
    const classes = await terminal.getAttribute('class');
    // Should have rounded corners
    expect(classes).toMatch(/rounded/);
  });

  test('should have proper window styling (shadow, border)', async ({ page }) => {
    const terminal = page.locator('div.bg-black.border-green-500');
    await expect(terminal).toBeVisible();
    
    // Should still have shadow
    const hasShadow = await terminal.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxShadow !== 'none';
    });
    expect(hasShadow).toBe(true);
  });
});
