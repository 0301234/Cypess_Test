/// <reference types="cypress" />


describe('mouse Action code ', () => {   

    it('Mouse Action on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
       
      
        })
        
        it('Mouse Action Drag and Drop on webdriver', () => {

            cy.visit('http://www.webdriveruniversity.com')
            cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
            cy.get('#draggable').trigger('mousedown',{which:1});
            cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
            }) 

            it.only('Double click on webdriver', () => {
                cy.visit('http://www.webdriveruniversity.com')
                cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
                cy.get('#double-click').dblclick()
              
                }) 
})