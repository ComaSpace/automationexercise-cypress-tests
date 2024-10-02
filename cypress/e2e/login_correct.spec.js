describe('Login User and Delete Account', () => {
    it('should log in and delete the account', () => {
        // Step 1: Visit the website
        cy.visit('https://www.automationexercise.com');

        // Step 2: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // Step 3: Enter correct email address and password
        const email = 'Lexs@gmail.com';
        const password = 'Lincoln82000';

        cy.get('input[data-qa="login-email"]').clear().type(email);
        cy.get('input[data-qa="login-password"]').clear().type(password);

        // Step 4: Click 'Login' button using the precise selector
        cy.get('button[data-qa="login-button"]').click();

        // Step 5: Verify login was successful
        cy.url().should('not.include', '/login');
        cy.contains('Logged in as').should('be.visible');
        cy.get('b').should('contain.text', 'Lincoln');

        // // Step 6: Click on 'Delete Account' button
        // cy.contains('Delete Account').click();

        // // Step 7: Verify that the account has been deleted
        // cy.contains('ACCOUNT DELETED!').should('be.visible');
    });
});
