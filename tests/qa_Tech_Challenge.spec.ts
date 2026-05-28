import { test, expect } from '@playwright/test';
import { RoomAvailablePage } from '../pages/checkRoomAvailability';
import { RoomBookingPage } from '../pages/roomBooking';
import { LoginPage } from '../pages/checkAdminDuties';
import { positiveLoginData, negativeLoginData } from '../test-data/admin_data';
import { positiveGuestData, negativeGuestData } from '../test-data/guest_data';


test.describe('Positive Guest Booking Flow', () => {

  positiveGuestData.forEach((data, index) => {

    test(`[${index + 1}] Successful Guest Booking Flow for - ${data.firstname}`, async ({ page }) => {


      const roomAvailable = new RoomAvailablePage(page);
      const roomBooking = new RoomBookingPage(page);

      await roomAvailable.navigateToHomepage();
      await roomAvailable.checkRoomAvailability(process.env.CHECK_IN_DATE!, process.env.CHECK_OUT_DATE!)

      //Verify the 1st room is available //

      await expect(page.getByRole('img', { name: 'Single Room' }).first()).toBeVisible();

      // Book the First Room Available //

      await roomBooking.selectFirstAvailableRoom()

      // Fill Valid Guest Details//

      await roomBooking.verifyGuestDetails(data);

      // Booking Confirmation //

      await expect(page.getByText('Your booking has been confirmed for the following dates:')).toBeVisible();

    }

    );

  });

});

test.describe('Negative Guest Booking Flow', () => {

  negativeGuestData.forEach((data, index) => {

    test(`[${index + 1}] Negative booking validation - ${data.error}`, async ({ page }) => {

      const roomAvailable = new RoomAvailablePage(page);
      const roomBooking = new RoomBookingPage(page);

      await roomAvailable.navigateToHomepage();
      await roomAvailable.checkRoomAvailability(process.env.CHECK_IN_DATE!, process.env.CHECK_OUT_DATE!)

      //Verify the 1st room is available //

      await expect(page.getByRole('img', { name: 'Single Room' }).first()).toBeVisible();

      // Book the First Room Available //

      await roomBooking.selectFirstAvailableRoom()

      // Fill Invalid Guest Details//

      await roomBooking.verifyGuestDetails(data);

      // Double check the error Validation //

      await expect(page.getByText(new RegExp(data.error, 'i'))).toBeVisible();

    }

    );

  });

});

test.describe('Positive Admin Login Tests', () => {

  positiveLoginData.forEach((data, index) => {

    test(`Positive login ${index + 1} | user: ${data.username}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await loginPage.navigateToAdminLoginPage()

      await loginPage.adminLogin(
        data.username,
        data.password
      );

      // View Bookings after successfull login //

      await expect(page).toHaveURL(/admin/);

      // View Booking
      // Update the FirstName of a Customer
      await loginPage.editFirstRoom()

    });

  });

});


test.describe('Negative Admin Login Tests', () => {

  negativeLoginData.forEach((data, index) => {

    test(`Negative login ${index + 1} | user: ${data.username} | expected: ${data.error}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await loginPage.navigateToAdminLoginPage()

      await loginPage.adminLogin(
        data.username,
        data.password
      );

      await expect(
        page.getByText(
          new RegExp(data.error, 'i')
        )
      ).toBeVisible();

    });

  });

});






