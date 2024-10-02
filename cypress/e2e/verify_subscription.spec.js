describe('Verify Subscription in Home Page', () => {
    it('should allow a user to subscribe', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.scrollTo('bottom');
        cy.get('h2').contains('Subscription').should('be.visible');

        // Correctly select the email input field using its id
        cy.get('#susbscribe_email').type('test2@example.com'); // Using id selector
        cy.get('button[type="submit"]').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    });
});
