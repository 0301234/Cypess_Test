/// <reference types="cypress" />


describe('Web drive code ', () => 

{

    it('test automation store normal selector', () => {
//test automation store normal selector

    cy.visit('https://automationteststore.com/')
    cy.get('.info_links_footer > :nth-child(5) > a').click()
    cy.get('#ContactUsFrm_first_name').type('Zeeshan')
    cy.get('#ContactUsFrm_email').type('zishan@gai.com')
    cy.get('#ContactUsFrm_enquiry').type('Normal selector')
    cy.get('.col-md-6 > .btn').click() //
  
        })
        

        //2nd test case
        it.only('test automation store With CSS selector', () => {
//test automation store With CSS selector

            cy.visit('https://automationteststore.com/')
            cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click().then((linkcontactus)=>{
                console.log("My name is zee   :"  + linkcontactus.text())// then promises and command
            })

            cy.get('.info_links_footer > :nth-child(5) > a').click()
            cy.get('input[id="ContactUsFrm_first_name"]').type('Zishan')
            cy.get('input[id="ContactUsFrm_email"]').type('zishan@gai.com')
            cy.get('textarea[id="ContactUsFrm_enquiry"]').type('CSS selector')
            cy.get('button[title="Submit"]').click()
            cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
                })
                
        

})
// code for promises and then command
it('test automation store With CSS selector', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed').contains('Skinsheen Bronzer Stick').click().then(function(itemtextthen){

        console.log('this is item'+ itemtextthen.text())
    })

})