/// <reference types="cypress" />


describe('Dropdown button code ', () => {   

    it('Dropdown code on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('JUnit')
        cy.get('#dropdowm-menu-3').select('JavaScript')


        
    })


})