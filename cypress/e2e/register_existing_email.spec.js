describe('Register User with Existing Email', () => {
    it('should display an error when using an already registered email', () => {
        // Step 1: Launch browser
        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('https://www.automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.title().should('include', 'Automation Exercise'); // Ensure the page title is correct

        // Step 4: Click on 'Signup / Login' button
        cy.get('a[href="/login"]').click(); // Click on the login link

        // Step 5: Verify 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');

        // Step 6: Enter name and already registered email address
        const name = 'Lincoln';
        const email = 'Lexs@gmail.com';

        cy.get('input[name="name"]').type(name);
        cy.get('input[data-qa="signup-email"]').type(email);

        // Step 7: Click 'Signup' button
        cy.get('button[data-qa="signup-button"]').click(); // Click the signup button

        // Step 8: Verify error 'Email Address already exist!' is visible
        cy.contains('Email Address already exist!').should('be.visible');
    });
});

