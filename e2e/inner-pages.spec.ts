import { test, expect } from '@playwright/test';

test.describe('Inner Pages', () => {
  test.describe('About Page', () => {
    test('should render whoami section', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByText('$ whoami')).toBeVisible();
    });

    test('should render education section', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByText('$ cat education.txt')).toBeVisible();
    });

    test('should render skills section', async ({ page }) => {
      await page.goto('/about');
      await expect(page.getByText('$ printenv | grep --skills')).toBeVisible();
    });

    test('should use ShellBox component for content sections', async ({ page }) => {
      await page.goto('/about');
      const shellBoxes = page.locator('div.border-neutral-700.bg-neutral-900\\/80');
      await expect(shellBoxes.first()).toBeVisible();
    });

    test('should have clickable $ whoami header that scrolls to section', async ({ page }) => {
      await page.goto('/about');
      const whoamiLink = page.getByRole('link', { name: '$ whoami' });
      await expect(whoamiLink).toBeVisible();
      // Should be an anchor tag with href
      await expect(whoamiLink).toHaveAttribute('href', '#whoami');
    });

    test('should have clickable $ cat education.txt header', async ({ page }) => {
      await page.goto('/about');
      const eduLink = page.getByRole('link', { name: '$ cat education.txt' });
      await expect(eduLink).toBeVisible();
      await expect(eduLink).toHaveAttribute('href', '#education');
    });

    test('should have clickable $ printenv header', async ({ page }) => {
      await page.goto('/about');
      const skillsLink = page.getByRole('link', { name: /printenv.*skills/i });
      await expect(skillsLink).toBeVisible();
      await expect(skillsLink).toHaveAttribute('href', '#skills');
    });
  });

  test.describe('Experience Page', () => {
    test('should render career section header', async ({ page }) => {
      await page.goto('/experience');
      await expect(page.getByText('$ ls ~/career/')).toBeVisible();
    });

    test('should display job positions', async ({ page }) => {
      await page.goto('/experience');
      // Use .first() to avoid strict mode violation
      await expect(page.getByText('Virtusa').first()).toBeVisible();
    });

    test('should have clickable $ ls ~/career/ header', async ({ page }) => {
      await page.goto('/experience');
      const careerLink = page.getByRole('link', { name: '$ ls ~/career/' });
      await expect(careerLink).toBeVisible();
      await expect(careerLink).toHaveAttribute('href', '#experience');
    });
  });

  test.describe('Projects Page', () => {
    test('should render projects header', async ({ page }) => {
      await page.goto('/projects');
      await expect(page.getByText('$ ls ~/projects/')).toBeVisible();
    });

    test('should display project cards', async ({ page }) => {
      await page.goto('/projects');
      // At least one project card should be visible
      const firstCard = page.locator('div.border-neutral-700').first();
      await expect(firstCard).toBeVisible();
    });

    test('should have clickable $ ls ~/projects/ header', async ({ page }) => {
      await page.goto('/projects');
      const projectsLink = page.getByRole('link', { name: '$ ls ~/projects/' });
      await expect(projectsLink).toBeVisible();
    });
  });

  test.describe('Accomplishments Page', () => {
    test('should render accomplishments header', async ({ page }) => {
      await page.goto('/accomplishments');
      await expect(page.getByText('$ ls -t ~/accomplishments/')).toBeVisible();
    });

    test('should have clickable $ ls -t ~/accomplishments/ header', async ({ page }) => {
      await page.goto('/accomplishments');
      const accLink = page.getByRole('link', { name: '$ ls -t ~/accomplishments/' });
      await expect(accLink).toBeVisible();
    });
  });

  test.describe('Footer', () => {
    test('should have social links', async ({ page }) => {
      await page.goto('/');

      const emailLink = page.locator('a[aria-label="Email"]');
      const githubLink = page.locator('a[aria-label="GitHub"]');
      const linkedinLink = page.locator('a[aria-label="LinkedIn"]');

      await expect(emailLink).toBeVisible();
      await expect(githubLink).toBeVisible();
      await expect(linkedinLink).toBeVisible();
    });

    test('should have "made with love" credit', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByText(/made with.*Ayush Mandowara/i)).toBeVisible();
    });
  });

  test.describe('Shelf Page', () => {
    test('should render blogs and videos headers', async ({ page }) => {
      await page.goto('/shelf');
      await expect(page.getByText('cd ~/shelf/blogs')).toBeVisible();
      await expect(page.getByText('cd ~/shelf/videos')).toBeVisible();
    });

    test('should have clickable cd ~/shelf/blogs header', async ({ page }) => {
      await page.goto('/shelf');
      const blogsLink = page.getByRole('link', { name: 'cd ~/shelf/blogs' });
      await expect(blogsLink).toBeVisible();
      await expect(blogsLink).toHaveAttribute('href', '#blogs');
    });

    test('should have clickable cd ~/shelf/videos header', async ({ page }) => {
      await page.goto('/shelf');
      const videosLink = page.getByRole('link', { name: 'cd ~/shelf/videos' });
      await expect(videosLink).toBeVisible();
      await expect(videosLink).toHaveAttribute('href', '#videos');
    });
  });
});
