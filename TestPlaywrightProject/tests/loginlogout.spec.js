const { test, expect } = require('@playwright/test');

test("Login and search employee timesheet", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Login
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[type='password']").fill("admin123");
  await page.locator("button:has-text('Login')").click();

  // Wait for dashboard
  await page.waitForLoadState('networkidle');

  // Call search function
  await searchEmployee(page, 'Ravi M B');
});

// 🔹 Reusable function (OUTSIDE test)
async function searchEmployee(page, employeeName) {
  // Click Time menu
  await page.locator('span:has-text("Time")').click();

  // Click Timesheets
  await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]').click();

  // Enter employee name
  const input = page.locator('input[placeholder="Type for hints..."]');
  await input.fill(employeeName);

  // Select from auto-suggestion
  await page
    .locator(`div[role="listbox"] >> text=${employeeName}`)
    .first()
    .click();

  // Click View
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/form/div[2]/button').click();
}