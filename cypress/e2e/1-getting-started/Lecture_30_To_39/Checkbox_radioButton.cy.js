/// <reference types="cypress" />


describe('Check box and radio button code ', () => {   

    it('Check box code on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()// Alert valy code ma ye logic use ho skta hy
        cy.get('#checkboxes > :nth-child(1) > input').as('Option-1')
        cy.get('@Option-1').check()
        cy.get('@Option-1').check().should('be.checked')


        
    })
    it('Check box code on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()// Alert valy code ma ye logic use ho skta hy
        cy.get(':nth-child(5) > input').as('Option-5')
        cy.get('@Option-5').uncheck().should('not.be.checked')
    })
    it('Check box code on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()// Alert valy code ma ye logic use ho skta hy
        cy.get('input[type="checkbox"]').as('Multi_Option')
        cy.get('@Multi_Option').check(['option-1','option-2','option-3']).should('be.checked')//for multipul at one time yaha values likhni hy inspect element sy
         
    })
    it.only('Radio button code on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()// Alert valy code ma ye logic use ho skta hy
       // cy.get('input[value="orange"]').first().check() this is also effective code u can use this if needed
        cy.get('#radio-buttons').find('input[type="radio"]').first().check()
        cy.get('#radio-buttons').find('input[type="radio"]').eq('2').check()
        
    })

})