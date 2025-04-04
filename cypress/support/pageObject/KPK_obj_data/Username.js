class Username {

    // username(username){
    //     cy.get('.team-form > #txtUsrNme').click().type(username)
    // }

   fillUsername(username) {
        cy.get('.team-form > #txtUsrNme').type(username);
      }

  }
  
  export default new Username();