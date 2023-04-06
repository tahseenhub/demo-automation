describe('Search functionality', () => {
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

    it('Search products', () => {
    // Enter search term and submit
      cy.get('.form-control').type('MacBook')
      cy.get('.input-group-btn > .btn').click()
      cy.get('#content > :nth-child(8)').should('be.visible')
    })


    it('Search products', () => {
        for (let i=1; i<=3; i++) {
            cy.get(`:nth-child(${i}) > .product-thumb > :nth-child(2) > .caption > h4 > a`).should('contain', 'MacBook')
        }
    })
  
       // Check if search results are displayed
      
  
 /*     // Check if the first result matches the search term
      cy.get('.search-results li:first').should('contain', 'product name')
    })*/
  })


