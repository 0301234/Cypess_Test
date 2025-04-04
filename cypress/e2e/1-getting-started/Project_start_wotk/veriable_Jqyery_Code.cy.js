/// <reference types="cypress" />


describe('Veriable, cypress Command and Jquery command', () => 

{

  it('Veriable, cypress Command and Jquery command', ()=>{
    cy.visit('https://automationteststore.com/')
   
   const Skincare_a = cy.get('#categorymenu').contains('Skincare')//variable
   Skincare_a.click()
   const Makeup_a = cy.get('#categorymenu').contains('Makeup')//variable
   Makeup_a.click()
   const header_a = cy.get('h1.heading1').contains('Makeup')//variable

   cy.get('h1.heading1').then(($HeaderText=> {     // h1.headding1 ki value store ki hy $HeaderText ma
   const header_b = $HeaderText.text()                    // store value 1 to other
    cy.log('this is header :'+ header_b)           //here we print
   

   }))
  })  
   


})  
   // it('displays two todo items by default', () => {

    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // cy.title().should('eq','OrangeHRM')
    //     })


    //   it('atumation test store', ()=>{

    //      cy.visit('https://automationteststore.com/')
    //      cy.get('.info_links_footer > :nth-child(5) > a').click()
    //   })  

      
     
        


