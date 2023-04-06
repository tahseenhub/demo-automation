describe('registration module', () => {

  before(()=> {
      //Cypress.session.clearAllSavedSessions()
      cy.clearCookies() 
  })
  it('should load correct url', () => {
      cy.visit('http://www.tutorialsninja.com/demo/')
  })

  it('Click for dropdown', () => {
    cy.get('.caret').click()
  })

  it('Click on registration', () => {
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
  })

  it('Empty form validation', () => {
    cy.get('.pull-right > .btn').click()
  })

  it('Error messeage should be displayed for the required fields', () => {
    cy.get('.alert').should('be.visible')
    cy.get(':nth-child(3) > .col-sm-10 > .text-danger').should('be.visible')
    cy.get(':nth-child(4) > .col-sm-10 > .text-danger').should('be.visible')
    cy.get(':nth-child(5) > .col-sm-10 > .text-danger').should('be.visible')
    cy.get(':nth-child(6) > .col-sm-10 > .text-danger').should('be.visible')
    cy.get(':nth-child(2) > .has-error > .col-sm-10 > .text-danger').should('be.visible')
    //cy.get('').should('be.visible')

  })

  it('Filled form validation', () => {
    cy.get('#input-firstname').type('Test')
    cy.get('#input-lastname').type('John')
    cy.get('#input-email').type('test22999@test.com')
    cy.get('#input-telephone').type('0123456789')
    cy.get('#input-password').type('Test@123')
    cy.get('#input-confirm').type('Test@123')
    cy.get('.col-sm-10 > :nth-child(2) > input').click()
    cy.get('[type="checkbox"]').click()
    cy.get('.pull-right > .btn').click()

  })

  it('A success message should be displayed', () => {
    cy.get('#content > h1').should('be.visible')
    cy.get('#content > :nth-child(2)').should('be.visible')
    cy.get('#content > :nth-child(3)').should('be.visible')
    cy.get('#content > :nth-child(4)').should('be.visible')
    cy.get('#content > :nth-child(5)').should('be.visible')
    cy.get('.pull-right > .btn').click()
  })
  
})




//.list-inline > .dropdown > .dropdown-toggle - dropdown
//.dropdown-menu > :nth-child(1) > a - registration