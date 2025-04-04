class HomePage_visit_kpk {
  visit_home() {
  cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
  cy.wait(6000)}

  fillUsername(username) {cy.get('.team-form > #txtUsrNme').type(username);}

  password(password) {cy.get('.p-password > #txtpassword').type(password); }

  loginButton(){cy.get('ns-button > #btnLogin').click()}

  sessionOutError(){ cy.get('.swal2-confirm').click()
  cy.wait(1000)}

  TakeActionOnTask(){ cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
  cy.wait(6000)}

  StatusDropdown(){cy.get("[class='p-dropdown-trigger ng-tns-c87-17']").click({force:true})}
  StatusDropdownVisible(){cy.get('#pr_id_15_list > p-dropdownitem').should('be.visible')
  cy.wait(500)}

  NextUrNmDropdown(){cy.get("[class='p-dropdown-trigger ng-tns-c87-18']").click({force:true})}

  SearchUserInUsDrp(userinUsdrp){cy.get('.p-dropdown-filter').type(userinUsdrp)}

  clickOnUser(){cy.get('[class="p-element ng-tns-c87-18 ng-star-inserted"]').click()}
  
  NoteSheetAuditTrail(notesheetinput){cy.get('#editor_notes-editor-1 > .ql-editor').click().type(notesheetinput)}
  
  SubmitButtonAfterNS(){cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()}

  YesSendButtonAfterSuB(){cy.get('[cssclass="summaryBtns"] > #undefined').click()}

  ConfirmSubmitButton(){cy.get('#undefined').click()
  cy.wait(5000)}
  
  LogoutDropdownButton(){ cy.get('.user-dropdown').click()}

  LogoutButton(){ cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()
  cy.wait(6000)}
 
  SendButtonAfterNotesheet(){ cy.get('.col-12 > [text="Send"] > #btnSave').click()}

  }
  
  export default new HomePage_visit_kpk();