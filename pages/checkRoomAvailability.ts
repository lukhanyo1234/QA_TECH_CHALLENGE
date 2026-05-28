import { Page, Locator } from '@playwright/test';

export class RoomAvailablePage {

    readonly page: Page;
    readonly checkIn: Locator;
    readonly checkOut: Locator;
    readonly CheckAvailability_button: Locator;


    constructor(page: Page) {

        this.page = page;

        this.checkIn = page.getByRole('textbox').first();

        this.checkOut = page.getByRole('textbox').nth(1);

        this.CheckAvailability_button = page.getByRole('button', { name: 'Check Availability' })

    }

    async navigateToHomepage() {

        await this.page.goto('https://automationintesting.online/');
    }

    async checkRoomAvailability(checkInDate: string, CheckOutDate: string) {

        await this.checkIn.fill(checkInDate);
        await this.checkOut.fill(CheckOutDate);
        await this.CheckAvailability_button.click();
    }

}


/*
 await page.goto('https://automationintesting.online/');

 await page.getByRole('textbox').first().click();
 await page.getByRole('gridcell', { name: 'Choose Tuesday, 26 May' }).click();
 await page.getByRole('textbox').nth(1).click();
 await page.getByRole('gridcell', { name: 'Choose Wednesday, 27 May' }).click();
 await page.getByRole('button', { name: 'Check Availability' }).click();
 
 await expect(page.getByRole('img', { name: 'Single Room' }).first()).toBeVisible();
 
 await page.getByRole('link', { name: 'Book now' }).nth(1).click();
 await page.getByRole('button', { name: 'Reserve Now' }).click();
 
 await page.getByRole('textbox', { name: 'Firstname' }).fill('Lukhanyo');
 
 await page.getByRole('textbox', { name: 'Lastname' }).fill('Mangcingwana');
 
 await page.getByRole('textbox', { name: 'Email' }).fill('mavamsie@gmail.com');
 
 await page.getByRole('textbox', { name: 'Phone' }).fill('06639661854');
 
 await page.getByRole('button', { name: 'Reserve Now' }).click();
 
 await expect(page.getByText('Your booking has been confirmed for the following dates:')).toBeVisible();
 
 await page.getByRole('link', { name: 'Return home' }).click();
*/


