describe('login module', () => {

    before(()=> {
        //Cypress.session.clearAllSavedSessions()
        cy.clearCookies() 
    })
    it('should load correct url', () => {
        cy.visit('http://www.tutorialsninja.com/demo/')
        cy.get('.caret').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()

    })

    it('An error messeage should be displayed with invalid login username', () => {
        cy.get('#input-email').type('ealkdgjnaes')
        cy.get('#input-password').type('Test@123')
        cy.get('form > .btn').click()
        cy.get('.alert').should('be.visible')
        
    })

    it('An error messeage should be displayed with invalid login password', () => {
        cy.get('#input-email').clear()
        cy.get('#input-password').clear()
        cy.get('#input-email').type('Test999@test.com')
        cy.get('#input-password').type('24624')
        cy.get('form > .btn').click()
        cy.get('.alert').should('be.visible')
    })

    it('An error messeage should be displayed with invalid login credentials', () => {
        cy.get('#input-email').clear()
        cy.get('#input-password').clear()
        cy.get('#input-email').type('ealkdgjnaes')
        cy.get('#input-password').type('24624')
        cy.get('form > .btn').click()
        cy.get('.alert').should('be.visible')
    })

    it('Should redirect to dashboad with valid credentials', () => {
        cy.get('#input-email').clear()
        cy.get('#input-password').clear()
        cy.get('#input-email').type('test21999@test.com')
        cy.get('#input-password').type('Test@123')
        cy.get('form > .btn').click()
        cy.url().should('include', 'http://tutorialsninja.com/demo/index.php?route=account/account')
    })
})