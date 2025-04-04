/// <reference types="cypress" />


describe('Handling iFrame code ', () => {

    it('Handling iFrame code on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then($iframe =>{ // '#frame' is code sy pory iframe ki body ko niklaa 
            const zeesha_a=$iframe.contents().find('body')      // iframe pury k pury ko constant ma store kiya like zeesha_a ma
            cy.wrap(zeesha_a).as('iframe_zee')  //her jaga takreban ye code hi use ho ga iFrame ko get krny k liy ye 3 line jo 1 block ma likhi hy vo

        })
        cy.get('@iframe_zee').find('#button-find-out-more').click()

        cy.get('@iframe_zee').find('#myModal').as('zeesModel')  //as uses hota hy puri body ma jo object hy un ko dekkny k liy
        cy.get('@zeesModel').should(($expectedText)=>{   //1 as ma value store krvaee then next 
            const zeesahn_ab=$expectedText.text()
            expect(zeesahn_ab).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')

        })
        cy.get('@zeesModel').contains('Close').click()  // Alert valy code ma ye logic use ho skta hy
        


        
    })

})