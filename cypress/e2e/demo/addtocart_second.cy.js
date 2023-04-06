describe('addtocartsecond' , () => {

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
        cy.get(`[onclick="cart.add('30');"]`).click()
    })

    /*it('Verify Add to cart functionality', () => {
        cy.get('#input-option226').select('1')
        cy.get('#input-quantity').clear()
        cy.get('#input-quantity').type('1')
/*
        let li = document.createElement('option');
        li.innerText = name;
        return li;
        let div = document.querySelector("#input-option226");
        let p = document.createElement("option");
        div.append("Some text", p);

 
    })*/

    
})