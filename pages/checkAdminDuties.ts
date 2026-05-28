import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly admin_menu_button: Locator;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly Login_button: Locator;
    readonly room1: Locator;
    readonly editPen: Locator;
    readonly booker_FirstName: Locator;
    readonly Front_Page_link_button: Locator;


    constructor(page: Page) {

        this.page = page;

        this.admin_menu_button = page.getByRole('link', { name: 'Admin', exact: true })

        this.Username = page.getByRole('textbox', { name: 'Username' });

        this.Password = page.getByRole('textbox', { name: 'Password' });

        this.Login_button = page.getByRole('button', { name: 'Login' });

        this.room1 = page.getByText('101');

        this.editPen = page.locator('.fa').first();

        this.booker_FirstName = page.locator('input[name="firstname"]');

        this.Front_Page_link_button = page.getByRole('link', { name: 'Front Page' })

    }

    async navigateToAdminLoginPage() {

        //await this.page.goto('https://automationintesting.online/');

        await this.page.goto(process.env.BASE_URL!);
        await this.admin_menu_button.click({ force: true });
    }

    async adminLogin(Username: string, Password: string) {

        await this.Username.fill(Username);
        await this.Password.fill(Password);
        await this.Login_button.click({ force: true });
    }

    async editFirstRoom() {

        await this.room1.click();
        await this.editPen.click();
        await this.booker_FirstName.press('ControlOrMeta+a');
        await this.booker_FirstName.fill('Godfrey');

        // confirm changes are updated correctly
        await this.editPen.click();

        // Navigate to the Homepage after edit/update the Booking //

        await this.Front_Page_link_button.click();

    }

}


/*
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  await page.getByRole('link', { name: 'Admin', exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://automationintesting.online/admin/rooms');

  await page.getByText('101').click();
  await page.locator('.fa').first().click();
  await page.locator('input[name="firstname"]').click();
  await page.locator('input[name="firstname"]').press('ControlOrMeta+a');
  await page.locator('input[name="firstname"]').fill('LoveLight');
  await page.locator('.fa').first().click();
  await page.getByRole('link', { name: 'Front Page' }).click();
});
*/
