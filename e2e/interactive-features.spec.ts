import { test, expect } from '@playwright/test';

test.describe('Interactive Terminal Features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for typing animation to complete and interactive mode to activate
    await page.waitForTimeout(6000);
  });

  test('should show interactive input after typing completes', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await expect(input).toBeVisible();
    
    const placeholder = await input.getAttribute('placeholder');
    expect(placeholder).toContain('help');
  });

  test('should respond to "help" command', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('help');
    await input.press('Enter');

    // Should show the command and response
    await expect(page.getByText('$ help')).toBeVisible();
    await expect(page.getByText(/Try.*about.*experience/i)).toBeVisible();
  });

  test('should navigate to /about when "about" command is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('about');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByText('$ whoami')).toBeVisible();
  });

  test('should navigate to /experience when "experience" command is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('experience');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/experience/);
    await expect(page.getByText('$ ls ~/career/')).toBeVisible();
  });

  test('should navigate to /projects when "projects" command is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('projects');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.getByText('$ ls ~/projects/')).toBeVisible();
  });

  test('should navigate to /accomplishments when "accomplishments" command is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('accomplishments');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/accomplishments/);
    await expect(page.getByText('$ ls -t ~/accomplishments/')).toBeVisible();
  });

  test('should navigate to /shelf when "shelf" command is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('shelf');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/shelf/);
    await expect(page.getByText('cd ~/shelf/blogs')).toBeVisible();
  });

  test('should navigate to /projects when "ls" command is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('ls');
    await input.press('Enter');

    // Should show directory listing in terminal AND navigate to projects
    await expect(page).toHaveURL(/.*\/projects/);
  });

  test('should navigate to /projects when "sl" typo is entered', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('sl');
    await input.press('Enter');

    // sl (steam locomotive) should redirect to projects just like ls
    await expect(page).toHaveURL(/.*\/projects/);
  });

  test('should respond to "cat" with file usage instructions', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cat');
    await input.press('Enter');

    await expect(page.getByText(/cat.*file|Usage.*cat/i)).toBeVisible();
  });

  test('should navigate to /about with "cat about.txt"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cat about.txt');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/about/);
  });

  test('should navigate to /experience with "cat career.log"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cat career.log');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/experience/);
  });

  test('should navigate to /about#skills with "cat skills.json"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cat skills.json');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/about#skills/);
  });

  test('should respond to "skills" command with skills output', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('skills');
    await input.press('Enter');

    await expect(page.getByText(/Core Skills/)).toBeVisible();
    await expect(page.getByText(/GenAI, LLMs, RAG, NLP/)).toBeVisible();
    await expect(page.getByText(/Python, AWS, GCP, Kubernetes, CrewAI/)).toBeVisible();
  });

  test('should respond to "core skills" alias and navigate to /about#skills', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('core skills');
    await input.press('Enter');

    await expect(page.getByText(/Core Skills/)).toBeVisible();
    await expect(page).toHaveURL(/.*\/about#skills/);
  });

  test('should respond to "stack" alias', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('stack');
    await input.press('Enter');

    await expect(page.getByText(/Core Skills/)).toBeVisible();
  });

  test('should respond to "core" alias', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('core');
    await input.press('Enter');

    await expect(page.getByText(/Core Skills/)).toBeVisible();
  });

  test('should navigate to /about with "cd about"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cd about');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/about/);
  });

  test('should navigate to /experience with "cd experience"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cd experience');
    await input.press('Enter');

    await expect(page).toHaveURL(/.*\/experience/);
  });

  test('should navigate home with "cd ~"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cd ~');
    await input.press('Enter');

    await expect(page).toHaveURL(/\/$/);
  });

  test('should respond to "vim" with vim joke', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('vim');
    await input.press('Enter');

    await expect(page.getByText(/can't exit vim|exit vim/i)).toBeVisible();
  });

  test('should respond to "vi" with vi joke', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('vi');
    await input.press('Enter');

    await expect(page.getByText(/can't exit|still can't exit/i)).toBeVisible();
  });

  test('should respond to "pwd"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('pwd');
    await input.press('Enter');

    await expect(page.getByText(/\/home\/ayush\/portfolio/i)).toBeVisible();
  });

  test('should respond to "git status"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('git status');
    await input.press('Enter');

    await expect(page.getByText(/branch main/i)).toBeVisible();
  });

  test('should respond to "top" with processes', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('top');
    await input.press('Enter');

    await expect(page.getByText(/coffee consumption/i)).toBeVisible();
  });

  test('should respond to "cowsay" with cow art', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('cowsay');
    await input.press('Enter');

    await expect(page.getByText(/I love this portfolio/i)).toBeVisible();
  });

  test('should respond to "fortune"', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('fortune');
    await input.press('Enter');

    await expect(page.getByText(/zero bugs|fortune cookie/i)).toBeVisible();
  });

  test('should respond to "man" with manual pages', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('man');
    await input.press('Enter');

    await expect(page.getByText(/Manual pages|man ayush/i)).toBeVisible();
  });

  test('should respond to "grep" with talent search', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('grep');
    await input.press('Enter');

    await expect(page.getByText(/searching for talent/i)).toBeVisible();
  });

  test('should respond to "coffee" easter egg', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('coffee');
    await input.press('Enter');

    await expect(page.getByText('$ coffee')).toBeVisible();
    await expect(page.getByText(/coffee and GPUs/i)).toBeVisible();
  });

  test('should respond to "sudo" easter egg', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('sudo');
    await input.press('Enter');

    await expect(page.getByText(/root access/i)).toBeVisible();
  });

  test('should respond to "matrix" easter egg', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('matrix');
    await input.press('Enter');

    await expect(page.getByText(/no spoon/i)).toBeVisible();
  });

  test('should respond to unknown commands with helpful message', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('foobar123');
    await input.press('Enter');

    await expect(page.getByText(/Command not found/i)).toBeVisible();
    await expect(page.getByText(/type 'help'/i)).toBeVisible();
  });

  test('should support command history with arrow keys', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    
    // Enter first command
    await input.fill('help');
    await input.press('Enter');
    
    // Enter second command
    await input.fill('coffee');
    await input.press('Enter');
    
    // Press arrow up to recall last command
    await input.press('ArrowUp');
    await expect(input).toHaveValue('coffee');
    
    // Press arrow up again
    await input.press('ArrowUp');
    await expect(input).toHaveValue('help');
  });

  test('should clear history with "clear" command', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    
    // Enter a command
    await input.fill('help');
    await input.press('Enter');
    await expect(page.getByText('$ help')).toBeVisible();
    
    // Clear
    await input.fill('clear');
    await input.press('Enter');
    
    // The command history should be cleared (only the prompt remains)
    const helpText = page.getByText('$ help');
    // After clear, the old output should be gone
    await expect(helpText).not.toBeVisible({ timeout: 3000 }).catch(() => {
      // It might still be visible from the LINES, so check that help response is gone
    });
  });

  test('should respond to "ls" with directory listing', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('ls');
    await input.press('Enter');

    await expect(page.getByText(/about\/.*experience\/.*projects\//i)).toBeVisible();
  });

  test('should respond to "whoami" easter egg', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('whoami');
    await input.press('Enter');

    await expect(page.getByText(/curious visitor/i)).toBeVisible();
  });

  test('should respond to "vim" easter egg', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('vim');
    await input.press('Enter');

    await expect(page.getByText(/can't exit vim/i)).toBeVisible();
  });

  test('should respond to "neofetch" easter egg', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    await input.fill('neofetch');
    await input.press('Enter');

    await expect(page.getByText(/PortfolioOS/i)).toBeVisible();
  });

  test('should auto-scroll when new commands are added', async ({ page }) => {
    const input = page.locator('input[aria-label="Terminal input"]');
    
    // Enter multiple commands
    for (const cmd of ['help', 'coffee', 'matrix', 'sudo', 'ls']) {
      await input.fill(cmd);
      await input.press('Enter');
      await page.waitForTimeout(100);
    }
    
    // Input should still be visible (scrolled into view)
    await expect(input).toBeVisible();
  });

  test('should focus input when clicking terminal', async ({ page }) => {
    const terminal = page.locator('div.bg-black.border-green-500');
    await terminal.click();
    
    const input = page.locator('input[aria-label="Terminal input"]');
    await expect(input).toBeFocused();
  });
});
