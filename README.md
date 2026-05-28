**Instruction to follow before execute my playwright automation framework project**

 1. On my .env file, change the  CHECK_IN_DATE value to current date.
 2. On my .env file, change the  CHECK_OUT_DATE value to next day date.
 3. Once the above actions are completed, you can run the test.
 4. My project is independently runnable from a clean start and all 7 test run successful.
 5. If for some reason one my test is failling, just re-run the test, possible that BookNow or Reserve Now Button are unclickable or not stable.


**Scenarios covered**

I did the positive testing for the guest booking flow to verify that the application works correctly when valid data and expected user actions are used. The goal is to confirm that a guest can successfully complete a booking from start to finish without errors.
This testing ensures that  bookings can be completed and  reservation data is saved correctly.

I did the Negative testing for the Guest booking flow to verify how the application behaves when users enter invalid, incomplete, or unexpected data.I wanted to ensure that the system  prevents invalid bookings, shows correct validation messages and provides a good user experience.I did scenarios where a user leave Lastname fields empty and enter an invalid phone number. I also did  proper login validation on the admin login test flow to  make sure only authorised admin can access the  booking data and admin settings.I did scenarios where a user entered an invalid username and correct password  and vice versa.

**Bug Report below for the Problem\issue I encounter when I was doing my testing.**

Phone Number Validation Error

**Defect Title**
Phone number validation displays unclear error message during booking
**Description**
When entering an invalid phone number while booking a room, the application displays a technical validation message instead of a user friendly message.
**Steps to Reproduce**
 - Open Shady Meadows B&B Demo Site (https://automationintesting.online/)
 - Select booking dates
 - Click Check Availability
 - Select a room
Enter:
 - Valid firstname
 - Valid lastname
 - Valid email
 - Invalid phone number: 78910
Click Reserve Now button

**Actual Result**

Application displays:

size must be between 11 and 21

**Expected Result**

Application should display a clear user friendly message such as:

Phone number must contain between 11 and 21 characters.

**Priority**
Medium



