describe('logout' , () => {

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

    it('Click on logout', () => {
        cy.get('.caret').click()
        cy.get('.dropdown-menu > :nth-child(5) > a').click()
        cy.url().should('include', 'http://tutorialsninja.com/demo/index.php?route=account/logout')
    })
})