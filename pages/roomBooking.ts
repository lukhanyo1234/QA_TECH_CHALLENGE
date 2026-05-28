import { Page, Locator } from '@playwright/test';

export class RoomBookingPage {

    readonly page: Page;
    readonly bookNow_Button: Locator;
    readonly Reserve_Now_Button: Locator;
    readonly Firstname_textbox: Locator;
    readonly Lastname_textbox: Locator;
    readonly Email: Locator;
    readonly Phone: Locator;


    constructor(page: Page) {

        this.page = page;

        this.bookNow_Button = page.getByRole('link', { name: 'Book now' }).nth(1);

        this.Reserve_Now_Button = page.getByRole('button', { name: 'Reserve Now' });

        this.Firstname_textbox = page.getByRole('textbox', { name: 'Firstname' });

        this.Lastname_textbox = page.getByRole('textbox', { name: 'Lastname' })

        this.Email = page.getByRole('textbox', { name: 'Email' })

        this.Phone = page.getByRole('textbox', { name: 'Phone' })

    }

    async selectFirstAvailableRoom() {

        await this.page.waitForLoadState('networkidle');
        await this.bookNow_Button.click({ force: true });
        await this.Reserve_Now_Button.click({ force: true });

    }
    async verifyGuestDetails(data: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
    }) {

        await this.Firstname_textbox.fill(data.firstname);
        await this.Lastname_textbox.fill(data.lastname);
        await this.Email.fill(data.email);
        await this.Phone.fill(data.phone);

        //submit my booking or Reserve the Room //
        await this.Reserve_Now_Button.click();
    }



}
