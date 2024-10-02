describe('Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
    it('should scroll down and up the page and verify the visibility of elements', () => {
        // Step 1: Launch browser (automatically happens)

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('match', /https?:\/\/automationexercise\.com\//); // Regex to allow both HTTP and HTTPS
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

        // Step 4: Scroll down to the 'SUBSCRIPTION' section directly
        cy.get('h2').contains('Subscription').scrollIntoView({ duration: 500 }).wait(500).should('be.visible');

        // Step 6: Scroll up page to top
        cy.scrollTo('top');

        // Step 7: Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    });
});


