import HomePage_visit_kpk from "../../../support/pageObject/KPK_obj_data/HomePage_visit_kpk"


describe('template spec',() => {

  beforeEach(() => 
  {
    // Clear cache, local storage, and cookies
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.window().then(win => {
      win.sessionStorage.clear()
    })
         cy.clearLocalStorage() // Clear local storage
      cy.clearCookies() // Clear cookies
     
      // Clear the cache using JavaScript
      cy.window().then(win => {
        win.sessionStorage.clear() // Clear session storage
      })
          })
    afterEach(() => {
     
    })
    it.skip('Error handel',()=>{
      HomePage_visit_kpk.visit_home() 
      HomePage_visit_kpk.sessionOutError()
    })
    it.skip('File upload', () => {
      HomePage_visit_kpk.visit_home()
      HomePage_visit_kpk.fillUsername('soadm.home')
      HomePage_visit_kpk.password('test')
      HomePage_visit_kpk.loginButton()     
       cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{

        const vLogin_priviousseeion=$ft_pro.text()
        const value_whichneed_match='Policy Statement';
        
        if(value_whichneed_match===vLogin_priviousseeion)
        { HomePage_visit_kpk.sessionOutError() }
         else{
          HomePage_visit_kpk.sessionOutError()
          HomePage_visit_kpk.sessionOutError()
         } })
         cy.wait(8000)
         cy.get('[style="padding-left: 2px; padding-right: 5px;"]').click()
         cy.wait(8000)
         cy.get('.filter.ng-star-inserted > ns-select-static > .team-form > .position-relative > .p-element > .mob-width > .p-dropdown-label').click().type('summary')
         cy.wait(2000)
         cy.get('.card-padding-left > .card > .card-header > .card-img-top').click()
         cy.wait(2000)
         cy.get('#btnEdit > .ng-star-inserted').click()
         cy.wait(2000)
         cy.get('#date').click().type('22/2/2024')
         cy.get('#radiobutton > ns-radio > .ns-radio > :nth-child(1) > .customs > .ngrx-forms-pristine').check()
         cy.get('#subjecttext').click().type('Summary On UAT 3/2/2024')
      //    cy.get('#editor_txtMultiEditor_1_0 > .ql-editor > p').click().type('nly intended as a quick way to try o.')
      //    cy.get('.p-dropdown-label').click().type('abid')
      //    cy.get('#editor_n-0-textarea-1667632798901 > .ql-editor').click().type('abid')
      //    HomePage_visit_kpk.SendButtonAfterNotesheet()
      //    cy.wait(1000)
      //    cy.get('[cssclass="summaryBtns"] > #undefined > .ng-star-inserted').click()
      //  HomePage_visit_kpk.ConfirmSubmitButton()
      //  HomePage_visit_kpk.LogoutDropdownButton()
      //  HomePage_visit_kpk.LogoutButton()
      })
it('passes', () => {
      HomePage_visit_kpk.visit_home()
      HomePage_visit_kpk.fillUsername('soadm.home')
      HomePage_visit_kpk.password('test')
      HomePage_visit_kpk.loginButton()     
       cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{

        const vLogin_priviousseeion=$ft_pro.text()
        const value_whichneed_match='Policy Statement';
        
        if(value_whichneed_match===vLogin_priviousseeion)
        { HomePage_visit_kpk.sessionOutError() }
         else{
          HomePage_visit_kpk.sessionOutError()
          HomePage_visit_kpk.sessionOutError()
         } })
         cy.wait(8000)
         cy.get('[style="padding-left: 2px; padding-right: 5px;"]').click()
         cy.wait(8000)
         cy.get('.filter.ng-star-inserted > ns-select-static > .team-form > .position-relative > .p-element > .mob-width > .p-dropdown-label').click().type('summary')
         cy.wait(2000)
         cy.get('.card-padding-left > .card > .card-header > .card-img-top').click()
         cy.wait(2000)
         cy.get('#btnEdit > .ng-star-inserted').click()
         cy.wait(2000)
         cy.get('#date').click().type('22/2/2024')
         cy.get('#radiobutton > ns-radio > .ns-radio > :nth-child(1) > .customs > .ngrx-forms-pristine').check()
         cy.get('#subjecttext').click().type('Summary On UAT 3/2/2024')
         cy.get('#editor_txtMultiEditor_1_0 > .ql-editor > p').click().type('nly intended as a quick way to try o.')
         cy.get('.p-dropdown-label').click().type('abid')
         cy.get('#editor_n-0-textarea-1667632798901 > .ql-editor').click().type('abid')
         HomePage_visit_kpk.SendButtonAfterNotesheet()
         cy.wait(1000)
         cy.get('[cssclass="summaryBtns"] > #undefined > .ng-star-inserted').click()
       HomePage_visit_kpk.ConfirmSubmitButton()
       HomePage_visit_kpk.LogoutDropdownButton()
       HomePage_visit_kpk.LogoutButton()
      })

it.skip('Secrtary', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    HomePage_visit_kpk.visit_home()
    HomePage_visit_kpk.fillUsername('secretary.home')
    HomePage_visit_kpk.password('test')
    HomePage_visit_kpk.loginButton()   
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
    const vLogin_priviousseeion=$ft_pro.text()
    const value_whichneed_match='Policy Statement';  
    if(value_whichneed_match===vLogin_priviousseeion)
    {  HomePage_visit_kpk.sessionOutError()}
     else{
      HomePage_visit_kpk.sessionOutError()
    HomePage_visit_kpk.sessionOutError() } })
     cy.wait(8000)
     HomePage_visit_kpk.TakeActionOnTask()
    HomePage_visit_kpk.StatusDropdown()
    HomePage_visit_kpk.StatusDropdownVisible()
     cy.contains('#pr_id_15_list > p-dropdownitem', 'Pending Review').click();
     cy.wait(1000)
    HomePage_visit_kpk.NextUrNmDropdown()
    HomePage_visit_kpk.SearchUserInUsDrp('Nadeem Aslam  Chuadhry')
    HomePage_visit_kpk.clickOnUser()
    HomePage_visit_kpk.NoteSheetAuditTrail('note sheet')
    HomePage_visit_kpk.SubmitButtonAfterNS()
    HomePage_visit_kpk.YesSendButtonAfterSuB()
    HomePage_visit_kpk.ConfirmSubmitButton()
    HomePage_visit_kpk.LogoutDropdownButton()
    HomePage_visit_kpk.LogoutButton()
})
it.skip('Chief Secrtary', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies()
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    HomePage_visit_kpk.visit_home()
     HomePage_visit_kpk.fillUsername('cs.estab')
     HomePage_visit_kpk.password('test')
     HomePage_visit_kpk.loginButton()  

   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
    const vLogin_priviousseeion=$ft_pro.text()  
    const value_whichneed_match='Policy Statement';  
    if(value_whichneed_match===vLogin_priviousseeion)
    {   HomePage_visit_kpk.sessionOutError()}
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(6000)
     HomePage_visit_kpk.TakeActionOnTask()
     HomePage_visit_kpk.NextUrNmDropdown()
     HomePage_visit_kpk.SearchUserInUsDrp('AMJAD ALI (PRINCIPAL SECRETARY TO CM - CM SECRETARIAT)')
     HomePage_visit_kpk.clickOnUser()
     HomePage_visit_kpk.NoteSheetAuditTrail('note sheet')
     HomePage_visit_kpk.SubmitButtonAfterNS()
     HomePage_visit_kpk.YesSendButtonAfterSuB()
     HomePage_visit_kpk.ConfirmSubmitButton()
     HomePage_visit_kpk.LogoutDropdownButton()
     HomePage_visit_kpk.LogoutButton()
})
 
it.skip('PSCM', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() 
    cy.window().then(win => {
      win.sessionStorage.clear() })
    HomePage_visit_kpk.visit_home()
    HomePage_visit_kpk.fillUsername('pscm.cmsect')
     HomePage_visit_kpk.password('test')
     HomePage_visit_kpk.loginButton()   
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
    const vLogin_priviousseeion=$ft_pro.text()
    const value_whichneed_match='Policy Statement'; 
    if(value_whichneed_match===vLogin_priviousseeion)
    {   HomePage_visit_kpk.sessionOutError() }
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(8000)
     HomePage_visit_kpk.TakeActionOnTask()
     HomePage_visit_kpk.NextUrNmDropdown()
     HomePage_visit_kpk.SearchUserInUsDrp('Azam k')
     HomePage_visit_kpk.NoteSheetAuditTrail('note sheet')
     HomePage_visit_kpk.SubmitButtonAfterNS()
     HomePage_visit_kpk.YesSendButtonAfterSuB()
     HomePage_visit_kpk.ConfirmSubmitButton()
     HomePage_visit_kpk.LogoutDropdownButton()
     HomePage_visit_kpk.LogoutButton()
})

it.skip('CM', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies
    cy.window().then(win => {
    win.sessionStorage.clear()  })
    HomePage_visit_kpk.visit_home()
    HomePage_visit_kpk.fillUsername('cm.cmsect')
     HomePage_visit_kpk.password('test')
      HomePage_visit_kpk.loginButton()        
  cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  const vLogin_priviousseeion=$ft_pro.text()
    const value_whichneed_match='Policy Statement';  
    if(value_whichneed_match===vLogin_priviousseeion)
    {      HomePage_visit_kpk.sessionOutError()  }
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(8000)
     HomePage_visit_kpk.TakeActionOnTask()
     HomePage_visit_kpk.StatusDropdown()
     cy.contains('#pr_id_15_list > p-dropdownitem', 'Approved').click();
    cy.wait(1000)
    HomePage_visit_kpk.NoteSheetAuditTrail('note sheet')
    HomePage_visit_kpk.SubmitButtonAfterNS()
    HomePage_visit_kpk.YesSendButtonAfterSuB()
    HomePage_visit_kpk.ConfirmSubmitButton()
     HomePage_visit_kpk.LogoutDropdownButton()
     HomePage_visit_kpk.LogoutButton()
})

it.skip('Secreatry after apparovel', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() })
    HomePage_visit_kpk.visit_home()
    HomePage_visit_kpk.fillUsername('secretary.home')
     HomePage_visit_kpk.password('test')
     HomePage_visit_kpk.loginButton()  
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
    const vLogin_priviousseeion=$ft_pro.text()
    const value_whichneed_match='Policy Statement'; 
    if(vLogin_priviousseeion===value_whichneed_match)
    {  HomePage_visit_kpk.sessionOutError()    }
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(8000)
     HomePage_visit_kpk.TakeActionOnTask()
     HomePage_visit_kpk.StatusDropdown()
    HomePage_visit_kpk.StatusDropdownVisible()
     cy.contains('#pr_id_15_list > p-dropdownitem', 'Pending Notification').click();
     HomePage_visit_kpk.NextUrNmDropdown()
     HomePage_visit_kpk.SearchUserInUsDrp('ishfaq ahmad')
     HomePage_visit_kpk.clickOnUser()
     HomePage_visit_kpk.NoteSheetAuditTrail('note sheet')
     HomePage_visit_kpk.SubmitButtonAfterNS()
     HomePage_visit_kpk.YesSendButtonAfterSuB()
     HomePage_visit_kpk.ConfirmSubmitButton()
     HomePage_visit_kpk.LogoutDropdownButton()
     HomePage_visit_kpk.LogoutButton()
})
it.skip('Section', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() 
    cy.window().then(win => {
      win.sessionStorage.clear() })
    HomePage_visit_kpk.visit_home()
   HomePage_visit_kpk.fillUsername('soadm.home')
     HomePage_visit_kpk.password('test')
     HomePage_visit_kpk.loginButton()  
     cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
    const vLogin_priviousseeion=$ft_pro.text()
    const value_whichneed_match='Policy Statement';
    if(vLogin_priviousseeion===value_whichneed_match)
    {   HomePage_visit_kpk.sessionOutError()  }
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(8000)
     HomePage_visit_kpk.TakeActionOnTask()
     cy.get('ns-button.ng-star-inserted > #btnSendNotification').click()
     cy.wait(4000)
     cy.get(':nth-child(1) > .card > .card-body').click()
     cy.get('ns-button > #btnEdit').click()
     cy.wait(6000)
     cy.get('#date').click().type('Note sheet 2')
     cy.get('#editor_c-6-ToText-To > .ql-editor').click().type('Note sheet 2')
     cy.get('#editor_txtMultiEditor_1_0 > .ql-editor > p').click().type('Note sheet 2')
     cy.get('#editor_txttestEditorSingle_2_0 > .ql-editor > p').click().type('Note sheet 2')
     cy.get('.p-dropdown-label').click().type('Abid')
     cy.get('#editor_n-0-textarea-1667632798901 > .ql-editor').click().type('zeeshan')
     HomePage_visit_kpk.SendButtonAfterNotesheet()
     HomePage_visit_kpk.YesSendButtonAfterSuB()
     HomePage_visit_kpk.ConfirmSubmitButton()
     HomePage_visit_kpk.LogoutDropdownButton()
     HomePage_visit_kpk.LogoutButton()
})

it.skip('Secreatry in note sheet', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() 
    cy.window().then(win => {
      win.sessionStorage.clear() })
    HomePage_visit_kpk.visit_home()
    HomePage_visit_kpk.fillUsername('secretary.home')
    HomePage_visit_kpk.password('test')
    HomePage_visit_kpk.loginButton()    
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
    const vLogin_priviousseeion=$ft_pro.text()
    const value_whichneed_match='Policy Statement';
    if(vLogin_priviousseeion===value_whichneed_match)
    {    HomePage_visit_kpk.sessionOutError()   }
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(8000)
     HomePage_visit_kpk.TakeActionOnTask()
     HomePage_visit_kpk.StatusDropdown()
     cy.contains('#pr_id_15_list > p-dropdownitem', 'Approved').click();
     HomePage_visit_kpk.NextUrNmDropdown()
     HomePage_visit_kpk.SearchUserInUsDrp('ishfaq ahmad')
     HomePage_visit_kpk.clickOnUser()
     HomePage_visit_kpk.NoteSheetAuditTrail('note sheet')
     HomePage_visit_kpk.SubmitButtonAfterNS()
     HomePage_visit_kpk.YesSendButtonAfterSuB()
     HomePage_visit_kpk.ConfirmSubmitButton()
     HomePage_visit_kpk.LogoutDropdownButton()
     HomePage_visit_kpk.LogoutButton()
})
it.skip('Section in note sheet', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() 
    cy.window().then(win => {
      win.sessionStorage.clear()  })
    HomePage_visit_kpk.visit_home()
    HomePage_visit_kpk.fillUsername('soadm.home')
     HomePage_visit_kpk.password('test')
    HomePage_visit_kpk.loginButton()    
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{ 
    const vLogin_priviousseeion=$ft_pro.text() 
    const value_whichneed_match='Policy Statement';  
    if(vLogin_priviousseeion===value_whichneed_match)
    {  HomePage_visit_kpk.sessionOutError() }
     else{
      HomePage_visit_kpk.sessionOutError()
      HomePage_visit_kpk.sessionOutError()
     } })
     cy.wait(8000)
    HomePage_visit_kpk.TakeActionOnTask()
    HomePage_visit_kpk.StatusDropdown()
     cy.contains('#pr_id_15_list > p-dropdownitem', 'Process Complete').click();
    HomePage_visit_kpk.NoteSheetAuditTrail('zeeshan')
    HomePage_visit_kpk.SubmitButtonAfterNS()
    HomePage_visit_kpk.YesSendButtonAfterSuB()
    HomePage_visit_kpk.ConfirmSubmitButton()
    HomePage_visit_kpk.LogoutDropdownButton()
    HomePage_visit_kpk.LogoutButton()
})
  })