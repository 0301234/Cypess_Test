/// <reference types="cypress" />


describe('Web drive code ', () => 

{

    it('test automation on webdriver', () => {

    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#contact-us').invoke('removeAttr','target').click()
   cy.url().should('include','contactus')
   cy.go('back')   //kisi page sy back aanny k liy 
   cy.reload()    // normal reload 
   cy.reload(true)  // for caches clear   
   cy.go('forward')  // jis page sy vapis ay hy us sy agy jany k liy
   cy.url().should('include','contactus')
   cy.go('back')

   cy.get('#to-do-list').invoke('removeAttr','target').click()
   cy.url().should('include','To-Do-List')
   cy.go('back')   //kisi page sy back aanny k liy 
   cy.reload() 
   cy.url().should('include','webdriveruniversity')
   cy.go('forward') 
   cy.url().should('include','To-Do-List')

   console.log('Test is compelete')// non cypress command
   cy.log('cypress command test is compelete')//cypress command

        })  
                
})