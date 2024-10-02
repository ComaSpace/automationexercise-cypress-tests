describe('View & Cart Brand Products', () => {
    it('should navigate through brand products', () => {
        // Step 1: Launch browser and navigate to the URL
        cy.visit('https://automationexercise.com');

        // Step 2: Click on 'Products' button
        cy.contains('Products').click();

        // Step 3: Verify that Brands are visible on the left sidebar
        cy.get('.brands_products').should('be.visible');

        // Step 4: Click on any brand name (the first brand link in the sidebar)
        cy.get('.brands_products a').first().click(); // Click on the first brand link

        // Step 5: Verify that user is navigated to the brand page
        cy.url().should('include', '/brand_products'); // Check if the URL contains '/brand_products'

        // Step 6: Verify that the brand header is displayed
        cy.get('h2.title.text-center').should('be.visible'); // Check that the brand title is visible

        // Step 7: Verify that products are displayed on the brand page
        cy.get('.productinfo').should('be.visible'); // Check that at least one product is visible

        // Step 8: On left side bar, click on another brand link
        cy.get('.brands_products a').not(':first').first().click(); // Click on the next brand link

        // Step 9: Verify that user is navigated to that brand page
        cy.url().should('include', '/brand_products'); // Check if the URL contains '/brand_products'

        // Step 10: Verify that the brand header is displayed
        cy.get('h2.title.text-center').should('be.visible'); // Check that the brand title is visible

        // Step 11: Verify that products are displayed on the new brand page
        cy.get('.productinfo').should('be.visible'); // Check that at least one product is visible
    });
});
