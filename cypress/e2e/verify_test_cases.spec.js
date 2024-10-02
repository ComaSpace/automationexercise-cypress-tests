describe('Test Case 7: Verify Test Cases Page', () => {

    it('should navigate to the test cases page successfully', () => {

        // Step 1: Launch browser and navigate to the URL
        cy.visit('https://www.automationexercise.com');

        // Step 2: Verify that the home page is visible successfully
        cy.url().should('include', 'automationexercise');
        cy.get('body').should('be.visible');

        // Step 3: Click on the 'Test Cases' button
        cy.contains('Test Cases').click();

        // Step 4: Verify that user is navigated to the test cases page successfully
        cy.url().should('include', '/test_cases');
        cy.contains('Test Cases').should('be.visible');
    });
});
