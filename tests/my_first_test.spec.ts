import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://app.asana.com/-/login');
    await page.pause();
    await page.getByLabel('Email address').fill('ben+pose@workwithloop.com');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Password123');
    await page.getByRole('button', { name: 'Log in' }).click();
});

test('Test Case One', async ({ page }) => {
    await page.goto('https://app.asana.com/-/login');
    await page.pause();
    await page.getByLabel('Email address').fill('ben+pose@workwithloop.com');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Password123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('Cross-functional project plan, Project').click();
    expect(page.locator('div').filter({ hasText: /^Draft project brief$/ }));
    expect(page.locator('div').filter({ hasText: /^Low$/ }).first());
    expect(page.locator('div').filter({ hasText: /^On track$/ }).first());
});

test('Test Case Two', async ({ page }) => {
    await page.goto('https://app.asana.com/-/login');
    await page.pause();
    await page.getByLabel('Email address').fill('ben+pose@workwithloop.com');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Password123');
    await page.getByRole('button', { name: 'Log in' }).click();
    expect(page.locator('div').filter({ hasText: /^Schedule kickoff meeting$/ }));
    expect(page.locator('div').filter({ hasText: /^Medium$/ }).first());
    expect(page.locator('div').filter({ hasText: /^At risk$/ }).first());
});

test('Test Case Three', async ({ page }) => {
    await page.goto('https://app.asana.com/-/login');
    await page.pause();
    await page.getByLabel('Email address').fill('ben+pose@workwithloop.com');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Password123');
    await page.getByRole('button', { name: 'Log in' }).click();
    expect(page.locator('div').filter({ hasText: /^Share timeline with teammates$/ }));
    expect(page.locator('div').filter({ hasText: /^High$/ }).first());
    expect(page.locator('div').filter({ hasText: /^Off track$/ }).first());
});

