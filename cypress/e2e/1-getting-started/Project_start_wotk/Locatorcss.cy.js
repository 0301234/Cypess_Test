
/// <reference types="cypress" />


describe('Zeeshan 1st', () => 
 
{

    it('displays two todo items by default', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.title().should('eq','OrangeHRM')
    cy.get('[name="username"]').click().type('Admin')
    cy.get('[name="password"]').click().type('admin123')
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('[name="firstName"]').click().clear().type("Zeeshan")
    cy.get('[name="middleName"]').click().clear().type("Mushtaq")
    cy.get('[name="lastName"]').click().clear().type("KMP")
    cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type("Nomi")
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type("6679")
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type("9651")
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type("No")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click().type("6")
    cy.contains('6').click()
    cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type("03084036")
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type("66666666")
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().type("p").click().contains("Pakistani")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().type("s").click().contains("Single")
    
    

        })
        

})
