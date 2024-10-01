describe('User Logout', () => {
    it('Logs in and logs out successfully', () => {
        // 1. Launch browser and navigate to the URL
        cy.visit('https://www.automationexercise.com');

        // 2. Verify that the home page is visible successfully
        cy.url().should('include', 'automationexercise.com');
        cy.get('h1').should('be.visible'); // Adjust this selector as needed for the home page title

        // 3. Click on 'Signup / Login' button
        cy.get('a[href="/login"]').click();

        // 4. Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');

        // 5. Enter correct email address and password
        const email = 'Lexs@gmail.com'; // Replace with your actual email used during signup
        const password = 'Lincoln82000'; // Replace with the corresponding password

        // Use the specific selector for the email and password fields
        cy.get('input[data-qa="login-email"]').clear().type(email); // Use the data-qa attribute for the email field
        cy.get('input[type="password"]').first().clear().type(password); // Assuming this is the correct password field

        // 6. Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // 7. Verify that 'Logged in as username' is visible
        cy.contains('Logged in as').should('be.visible');

        // 8. Click 'Logout' button
        cy.get('a[href="/logout"]').click();

        // 9. Verify that user is navigated to the login page
        cy.contains('Login to your account').should('be.visible');
    });
});
