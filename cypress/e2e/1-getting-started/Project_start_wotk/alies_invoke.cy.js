/// <reference types="cypress" />

describe('Alias invoke code', () => 

{ 
    // its project code
it.only('Alias invoke code', ()=>{
    cy.visit('https://automationteststore.com/')
   
    cy.get('#categorymenu').contains('Hair Care').click()
   
    //each loop functionality code
   const ilterating_a =cy.get('.fixed_wrapper')
   ilterating_a.eq(0).invoke('text').as('zeesahn_a') //eq(0) mean 1st index // invoke('text') jo text hy veribale ma vo use krna //as('zeesahn_a')  as k zariy dosery variable ma store krna 
   cy.get('@zeesahn_a')          // @ alias ko use krny k liy use krty ab //cy.get('@zeesahn_a') aik variable hy
})

//Alias (........).as('texta_2)  ye puri line ko name dyny k liy use hota hy

it('Alias invoke code', ()=>{
    cy.visit('https://automationteststore.com/')
   
   cy.get('.thumbnail').as('zeesahn_b')  //as('zeesahn_b')  as k zariy dosery variable ma store krna 
   cy.get('@zeesahn_b').should('have.length', 16)         // @ alias ko use krny k liy use krty ab //cy.get('@zeesahn_a') aik variable hy
   cy.get('@zeesahn_b').find('.productcart').should('have.length', 13) 
})

 
it('combine Alias invoke code', ()=>{            //combine Alias invoke code
    cy.visit('https://automationteststore.com/')
   
   cy.get('.thumbnail').as('zeesahn_b')  //as('zeesahn_b')  as k zariy dosery variable ma store krna 
   cy.get('@zeesahn_b').find('.price').each(($element, index, $list)=>{
    cy.log($element.text())

   })
})

it.only('combine Alias invoke code', ()=>{            //combine Alias invoke code
    cy.visit('https://automationteststore.com/')
   
   cy.get('.thumbnail').find('.price').invoke('text').as('zeeshan_as')//sari line ko zeeshan_as consider kar rha
   cy.get('@zeeshan_as').then($zishan_a=>{   //sari vale zishan_a ma store ho gae // zishan_a ma 16 values hy un ko loop k through print krvana
   cy.log('Nomi')
    var i;
    var nomi=$zishan_a.split('$');// ab sari value nomi ma store ho gae
var a=1;
    for(i=0;i<nomi.length; i++){
        cy.log('zeeshan')
        cy.log(a)
        cy.log(nomi[i])   
        a++                                                                                                                             
     }
   })
    
})
  })  
