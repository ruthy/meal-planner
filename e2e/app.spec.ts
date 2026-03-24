import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test('shows DailyBite branding and sign-in form', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/DailyBite/);
    await expect(page.getByText('DailyBite')).toBeVisible();
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /password/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in →/i })).toBeVisible();
  });

  test('can switch to sign-up tab', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: /sign up/i }).first().click();
    await expect(page.getByRole('textbox', { name: /full name|ruthy/i })).toBeVisible();
  });

  test('shows validation error for empty email', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: /sign in →/i }).click();
    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test('shows validation error for short password', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('textbox', { name: /email/i }).fill('test@test.com');
    await page.getByRole('textbox', { name: /password/i }).fill('123');
    await page.getByRole('button', { name: /sign in →/i }).click();
    await expect(page.getByText(/6 characters/i)).toBeVisible();
  });

  test('forgot password link shows reset form', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: /forgot password/i }).click();
    await expect(page.getByRole('button', { name: /send reset link/i })).toBeVisible();
  });
});

test.describe('Auth redirect', () => {
  test('unauthenticated user is redirected to /login', async ({ page }) => {
    await page.goto('/');
    await page.waitForURL(/\/login/);
    expect(page.url()).toContain('/login');
  });
});

test.describe('Password reset page', () => {
  test('renders reset password form', async ({ page }) => {
    await page.goto('/reset-password');
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
  });
});
