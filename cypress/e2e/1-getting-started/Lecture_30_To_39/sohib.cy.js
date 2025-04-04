describe('template spec', { testIsolation: false }, () => {

    it('passes', () => {
  
      cy.visit('https://qa-practice.netlify.app/')
  
      cy.get('#auth-shop').click()

    })
  
    it('enter the credentials', () => {
  
      cy.get('#email').type('admin@admin.com')
  
      cy.get('#password').type('admin123')
  
      cy.get('#submitLoginBtn').click()
  
    })
  
  
  
  
  })