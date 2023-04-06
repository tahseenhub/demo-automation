describe('addtocartthird' , () => {

    before(()=> {
        //Cypress.session.clearAllSavedSessions()
        cy.clearCookies() 
    })
    
    it('should load correct url', () => {
        cy.visit('http://www.tutorialsninja.com/demo/')
    })

    it('login', () => {
        cy.get('.caret').click()
        cy.get('.dropdown-menu > :nth-child(2) > a ').click()
        cy.get('#input-email').type('test21999@test.com')
        cy.get('#input-password').type('Test@123')
        cy.get('form > .btn').click()
    })

    it('Click on Your Store', () => {
        cy.get('h1 > a').click()
    })

    it('Click on the Add to cart CTA from the store page', () => {
        cy.get(`[onclick="cart.add('40');"]`).click()
    })

    it('Click on the cart icon', () => {
        cy.get('.btn-inverse').click()
    })

    it('Click on the view cart', () => {
        cy.get('[href="http://tutorialsninja.com/demo/index.php?route=checkout/cart"] > strong').click()
    })

    it('Click on the cart icon', () => {
        cy.get(':nth-child(4) > .input-group > .form-control').clear()
        cy.get(':nth-child(4) > .input-group > .form-control').type('1')
        cy.get(':nth-child(4) > .input-group > .input-group-btn > .btn-primary').click()
        cy.get('.alert-success').should('be.visible') 
    })

    /*it('Click on the coupon dropdown', () => {
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click()
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click()
    })*/

    it('Click on the shipping dropdown', () => {
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click()
    })

    it('Shipping dropdown functionality', () => {
        cy.get('#input-country').select('1');
        //cy.wait(10000)
        cy.get('#input-zone').select('3', {force: true});
        cy.get('.pull-right > .btn').click()
        cy.get('.alert').should('be.visible')
        
    })
    
})