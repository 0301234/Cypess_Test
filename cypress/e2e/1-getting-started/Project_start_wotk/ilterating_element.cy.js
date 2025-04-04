/// <reference types="cypress" />


describe('Ilterating elements command', () => 

{
    //pratice code
  it('Ilterating elements command', ()=>{ 
    cy.visit('https://automationteststore.com/')
   
    cy.get('#categorymenu').contains('Hair Care').click()
   
   cy.get('.fixed_wrapper').each(($element, index, $list) => {        //element, index, list 
    cy.log('index :'+ index + ' :' +$element.text() )   
  })  
  })  
   // its project code
  it('Ilterating elements command', ()=>{
    cy.visit('https://automationteststore.com/')
   
    cy.get('#categorymenu').contains('Hair Care').click()
   
    //each loop functionality code
   cy.get('.fixed_wrapper').each(($element, index, $list) => {        //element, index, list   its ilteration code
   
    if ($element.text().includes('Eau Parfumee au The Vert Shampoo')){
        cy.log('Zeesahn')
        cy.log('index :'+ index + ' :' +$element.text() )  
        cy.wrap($element).click()
    } else {
        cy.log('Fawad')
        cy.log('index :'+ index + ' :' +$element.text() )  
    }
        
  })  
  })  
     // its project code
     it.only('Ilterating elements command', ()=>{
        cy.visit('https://automationteststore.com/')
       
        cy.get('#categorymenu').contains('Hair Care').click()
       
        //each loop functionality code
       const ilterating_a =cy.get('.fixed_wrapper')
       ilterating_a.each(($element, index, $list) => {        //element, index, list   its ilteration code
       
        if (index==3 ){
            cy.log('Zeesahn')
            cy.log('index :'+ index + ' :' +$element.text() )  
            cy.wrap($element).click()
        } else {
            cy.log('Fawad')
            cy.log('index :'+ index + ' :' +$element.text() )  
        }
            
      })  
      })  

})  
   

      
     
        


