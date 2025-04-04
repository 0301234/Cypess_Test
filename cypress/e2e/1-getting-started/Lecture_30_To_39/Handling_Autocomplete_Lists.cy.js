/// <reference types="cypress" />


describe('Handing Autocompelete list button code ', () => {   

    it('Handing Autocompelete list on webdriver', () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.get('#myInput').type('c')
        cy.get('#myInputautocomplete-list>*').each(($ft_pro,index_p,$list_p)=>{

            const value_of_field=$ft_pro.text()

            const value_whichneed_match='Coffee';
            
            if(value_whichneed_match===value_of_field)
        {
            //$ft_pro.click()
            cy.wrap($ft_pro).click()
            cy.get('#submit-button').click()
            cy.url().should('include', value_whichneed_match)
        }
        }).then(()=>{
            cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list>*').each(($ft_pro,index_p,$list_p)=>{

            const value_of_field=$ft_pro.text()

            const value_whichneed_match='Apple';
            
            if(value_whichneed_match===value_of_field)
        {
            //$ft_pro.click()
            cy.wrap($ft_pro).click()
            cy.get('#submit-button').click()
            cy.url().should('include', value_whichneed_match)
        }
        })
     
      
        })
     
      

        
    });


})