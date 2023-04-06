
describe('addtocart' , () => {

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
        cy.get(`[onclick="cart.add('42');"]`).click()
    })

    it('Verify Add to cart functionality', () => {
        cy.get('.radio > label > input').click()
        cy.get(':nth-child(2) > label > input').click()
        cy.get('#input-option208').clear()
        cy.get('#input-option208').type('Test')

        cy.get('#input-option217').select('1')  

        cy.get('#input-option209').type('Test Write')


        cy.get('#button-upload222').attachFile('demo.html')
        cy.wait(2000)
        cy.get('#button-upload222').click()
        cy.get('#input-option219').clear()
        cy.get('#input-option219').type('2023-03-22')
        cy.get('#input-option221').clear()
        cy.get('#input-option221').type('22:25')
        cy.get('#input-option220').clear()
        cy.get('#input-option220').type('2023-03-22 22:25')
        cy.get('#input-quantity').clear()
        cy.get('#input-quantity').type('1')
        cy.get('#button-cart').click()


        


        
 //       cy.get('#button-upload222').selectFile('./cypress/fixtures/image.png', {force:true})
   //     cy.get('#button-upload222').click() 
        //cy.get('#input-quantity').clear()
        //cy.get('#input-quantity').type('1')
        //cy.get('#button-cart').click()

  
})

})
