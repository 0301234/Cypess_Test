/// <reference types="cypress" />


describe('Web drive code ', () => 

{

    it('test automation on webdriver', () => {

    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
   // cy.get('#contact-us > .thumbnail').click()
   cy.get('[name="first_name"]').type('Zeeshan')
   cy.get('[name="last_name"]').type('Mushtaq')
   cy.get('[name="email"]').type('zishan@gmail.com')
   cy.get('textarea.feedback-input').type('No comments')
   cy.get('[type="submit"]').click()
   cy.get('h1').should('have.text','Thank You for your Message!')

   console.log('Test is compelete')// non cypress command
   cy.log('cypress command test is compelete')//cypress command

        })
        
        
        it.only('test automation on webdriver', () => {

            cy.visit('http://www.webdriveruniversity.com')
           cy.get('#contact-us').invoke('removeAttr','target').click()
           cy.get('[name="first_name"]').type('Zeeshan')
           cy.get('[name="last_name"]').type('Mushtaq')
           cy.get('[name="email"]').type('zishan@gmail.com')
           cy.get('textarea.feedback-input').type('No comments')
           cy.get('[type="submit"]').click()
           cy.get('h1').should('have.text','Thank You for your Message!')
        
           console.log('Test is compelete')// non cypress command
           cy.log('cypress command test is compelete')//cypress command
        
                })
                
})