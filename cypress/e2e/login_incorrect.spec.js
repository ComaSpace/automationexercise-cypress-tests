describe('User Login with Incorrect Credentials', () => {
    it('Shows error message for incorrect email and password', () => {
        // 1. Launch browser and navigate to the URL
        cy.visit('https://www.automationexercise.com');

        // 2. Verify that the home page is visible
        cy.url().should('include', 'automationexercise.com');
        cy.get('h1').should('be.visible'); // Adjust this selector as needed for the home page title

        // 3. Click on 'Signup / Login' button
        cy.get('a[href="/login"]').click();

        // 4. Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');

        // 5. Enter incorrect email address and password
        cy.get('input[name="email"]').first().clear().type('incorrect@example.com'); // Ensure we target the first input
        cy.get('input[name="password"]').first().clear().type('wrongpassword'); // Ensure we target the first input

        // 6. Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // 7. Verify error 'Your email or password is incorrect!' is visible
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});
