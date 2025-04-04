// /// <reference types="cypress" />


// describe('Handling Alert code ', () => {

//     it('test automation on webdriver', () => {

//         cy.visit('http://www.webdriveruniversity.com')
//         cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
//         cy.get('#button1').click()

//         cy.on('window:alert', (strzee) => {
//             expect(strzee).to.equal('I am an alert box!')
//         })
//         cy.log('button 1')

//         cy.get('#button2').click()
//         cy.get('.close').click()

//         //   cy.get('#button3').click() 
//         //   cy.wait(100000)
//         //   cy.get('#button1').click() 
//         //   cy.get('.close').click()
//         //   cy.log('button 3 an other button')

//         cy.get('#button4').click()

//         cy.on('window:confirm', (strzee_4) => {                         //'window:confirm is use for false value and alert use press on ok button
//             //expect(strzee_4).to.equal('I am an alert box!')
//             return false; //return close mean close popum button per click kry ga
//             //return true // retrun true OK popup per click kry ga 
//         })
//         cy.get('#confirm-alert-text').contains('You pressed Cancel!')

//     })

// })


import HomePage_visit_kpk from "./HomePage_visit_kpk"


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
  
    it.only('passes', () => {
      //HomePage_visit_kpk.visit_home();
        //  const visit_home1= new HomePage_visit_kpk();
         // visit_home1.visit_home();

      cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    //  cy.get('.swal2-confirm').click()
        cy.get('.team-form > #txtUsrNme').click().type('soadm.home')
        cy.get('.p-password > #txtpassword').click().type('test')
     

        cy.get('ns-button > #btnLogin').click()
         
       cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{

        const vLogin_priviousseeion=$ft_pro.text()

        const value_whichneed_match='Policy Statement';
        
        if(value_whichneed_match===vLogin_priviousseeion)
        {
          cy.get('.swal2-confirm').click()
         }
         else{
          cy.get('.swal2-confirm').click()
          cy.get(1000)
          cy.get('.swal2-confirm').click()
         } })
         cy.wait(8000)
         cy.get('[style="padding-left: 2px; padding-right: 5px;"]').click()
         cy.wait(8000)
         cy.get('.filter.ng-star-inserted > ns-select-static > .team-form > .position-relative > .p-element > .mob-width > .p-dropdown-label').click().type('summary')
         cy.wait(2000)
         cy.get('.card-padding-left > .card > .card-header > .card-img-top').click()
       //  cy.get('.card-padding-left > .card > .card-header > .card-img-top').click()
         cy.wait(2000)
         cy.get('#btnEdit > .ng-star-inserted').click()
         cy.wait(2000)
         cy.get('#date').click().type('22/2/2024')
         cy.get('#radiobutton > ns-radio > .ns-radio > :nth-child(1) > .customs > .ngrx-forms-pristine').check()
         cy.get('#subjecttext').click().type('Automate Summary by me Zeeshan 1234567')
         cy.get('#editor_txtMultiEditor_1_0 > .ql-editor > p').click().type('nly intended as a quick way to try out Cypress. To record tests to Cypress Cloud, you...')
         cy.get('.p-dropdown-label').click().type('abid')
      
         cy.get('#editor_n-0-textarea-1667632798901 > .ql-editor').click().type('abid')
         cy.get('.col-12 > [text="Send"] > #btnSave').click()
         cy.wait(1000)
         cy.get('[cssclass="summaryBtns"] > #undefined > .ng-star-inserted').click()
         cy.get('#undefined').click()
         cy.wait(5000)
         cy.get('.user-dropdown').click()
      cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()
      })

  it('Secrtary', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('secretary.home')
    cy.get('.p-password > #txtpassword').click().type('test')

    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{

    const vLogin_priviousseeion=$ft_pro.text()

    const value_whichneed_match='Policy Statement';
    
    if(value_whichneed_match===vLogin_priviousseeion)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('nadeem')
     cy.get('.ng-tns-c87-18 > .p-ripple').click()
     cy.get('#editor_notes-editor-1 > .ql-editor').click().type('note sheet')
     cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()
  //   cy.get('ns-button > #btnLogin').click()
     
  //  cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{

  //   const vLogin_priviousseeion=$ft_pro.text()

  //   const value_whichneed_match='Policy Statement';
    
  //   if(value_whichneed_match===vLogin_priviousseeion)
  //   {
  //     cy.get('.swal2-confirm').click()
  //    }
  //    else{
  //     cy.get('.swal2-confirm').click()
  //     cy.get('.swal2-confirm').click()
  //    } })
  //    cy.wait(8000)
  //    cy.get('[style="padding-left: 2px; padding-right: 5px;"]').click()
  //    cy.wait(8000)
  //    cy.get('.filter.ng-star-inserted > ns-select-static > .team-form > .position-relative > .p-element > .mob-width > .p-dropdown-label').click().type('summary')
  //    cy.wait(2000)
  //    cy.get('.card-padding-left > .card > .card-header > .card-img-top').click()
  //    cy.get('.card-padding-left > .card > .card-header > .card-img-top').click()
  //    cy.wait(2000)
  //    cy.get('#btnEdit > .ng-star-inserted').click()
  //    cy.wait(2000)
  //    cy.get('#date').click().type('22/2/2024')
  //    cy.get('#radiobutton > ns-radio > .ns-radio > :nth-child(1) > .customs > .ngrx-forms-pristine').check()
  //    cy.get('#subjecttext').click().type('Summary 3')
  //    cy.get('#editor_txtMultiEditor_1_0 > .ql-editor > p').click().type('nly intended as a quick way to try out Cypress. To record tests to Cypress Cloud, you...')
  //    cy.get('.p-dropdown-label').click().type('abid')
  
  //    cy.get('#editor_n-0-textarea-1667632798901 > .ql-editor').click().type('abid')
  //    cy.get('.col-12 > [text="Send"] > #btnSave').click()
  //    cy.wait(1000)
  //    cy.get('[cssclass="summaryBtns"] > #undefined > .ng-star-inserted').click()
  //    cy.get('#undefined').click()
  //    cy.wait(5000)
    

})
it('Chief Secrtary', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('cs.estab')
    cy.get('.p-password > #txtpassword').click().type('test')
  
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(value_whichneed_match===vLogin_priviousseeion)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('amjad')
     cy.get('.ng-tns-c87-18 > .p-ripple').click()
     cy.get('#editor_notes-editor-1 > .ql-editor').click().type('note sheet')
     cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})
 

it('PSCM', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('pscm.cmsect')
    cy.get('.p-password > #txtpassword').click().type('test')
  
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(value_whichneed_match===vLogin_priviousseeion)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('Azam k')
     cy.get('.ng-tns-c87-18 > .p-ripple').click()
     cy.get('#editor_notes-editor-1 > .ql-editor').click().type('note sheet')
     cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})

it('CM', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('cm.cmsect')
    cy.get('.p-password > #txtpassword').click().type('test')
  
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(value_whichneed_match===vLogin_priviousseeion)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('.pt-2 > :nth-child(2)').click().type('A')
     //cy.get('#p-highlighted-option').click()
    // cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
    //  cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('Azam k')
    // cy.get('.ng-tns-c87-18 > .p-ripple').click()
      cy.get('#editor_notes-editor-1 > .ql-editor').click().type('note sheet')
      cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})

it('Secreatry after apparovel', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('secretary.home')
    cy.get('.p-password > #txtpassword').click().type('test')
  
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(vLogin_priviousseeion===value_whichneed_match)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('.pt-2 > :nth-child(2)').click().type('p')
     cy.get('#p-highlighted-option').click()
    // cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('ishfaq')
     //cy.get('.ng-tns-c87-18 > .p-ripple').click()
      cy.get('#editor_notes-editor-1 > .ql-editor').click().type('note sheet')
      cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})
it('Section', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('soadm.home')
    cy.get('.p-password > #txtpassword').click().type('test')
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(vLogin_priviousseeion===value_whichneed_match)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     //cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('ishfaq')
     cy.get('ns-button.ng-star-inserted > #btnSendNotification').click()
     cy.get(':nth-child(1) > .card > .card-body').click()
     cy.get('ns-button > #btnEdit').click()
     cy.get('#date').click().type('Note sheet 2')
     cy.get('#editor_c-6-ToText-To > .ql-editor').click().type('Note sheet 2')
     cy.get('#editor_txtMultiEditor_1_0 > .ql-editor > p').click().type('Note sheet 2')
     cy.get('#editor_txttestEditorSingle_2_0 > .ql-editor > p').click().type('Note sheet 2')
     cy.get('.p-dropdown-label').click().type('Abid')
     cy.get('#editor_n-0-textarea-1667632798901 > .ql-editor').click().type('zeeshan')
     cy.get('.col-12 > [text="Send"] > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})

it('Secreatry in note sheet', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('secretary.home')
    cy.get('.p-password > #txtpassword').click().type('test')
  
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(vLogin_priviousseeion===value_whichneed_match)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('.pt-2 > :nth-child(2)').click().type('A')
     cy.get('#p-highlighted-option').click()
    // cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('ns-select-static.ng-star-inserted > .team-form').click().type('ishfaq')
     //cy.get('.ng-tns-c87-18 > .p-ripple').click()
      cy.get('#editor_notes-editor-1 > .ql-editor').click().type('note sheet')
      cy.get('.col-12 > ns-button.ng-star-inserted > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})
it('Section in note sheet', () => {
  cy.reload()
    cy.clearLocalStorage() // Clear local storage
    cy.clearCookies() // Clear cookies

    // Clear the cache using JavaScript
    cy.window().then(win => {
      win.sessionStorage.clear() // Clear session storage
    })
    cy.visit('https://uat.digital.kp.gov.pk/dmsw/login')
    cy.wait(5000)
   cy.get('.swal2-confirm').click()
    cy.get('.team-form > #txtUsrNme').click().type('soadm.home')
    cy.get('.p-password > #txtpassword').click().type('test')
  
    cy.get('ns-button > #btnLogin').click()
     
   cy.get('.swal2-title').each(($ft_pro,index_p,$list_p)=>{
  
    const vLogin_priviousseeion=$ft_pro.text()
  
    const value_whichneed_match='Policy Statement';
    
    if(vLogin_priviousseeion===value_whichneed_match)
    {
      cy.get('.swal2-confirm').click()
     }
     else{
      cy.get('.swal2-confirm').click()
      cy.get('.swal2-confirm').click()
     } })
     cy.wait(8000)
     cy.get(':nth-child(2) > .d-md-flex > .card-right > .align-items-center > div.ng-star-inserted > ns-button > #btnTkAction > .ng-star-inserted').click()
     cy.wait(3000)
     cy.get('.pt-2 > :nth-child(2)').click().type('p')
     cy.get('#pr_id_15_label').click()


    // cy.get('.p-dropdown-label').click().type('Abid')
    cy.get('#editor_notes-editor-1 > .ql-editor').click().type('zeeshan')
    cy.get('.col-12 > [text="Submit"] > #btnSave').click()
     cy.get('[cssclass="summaryBtns"] > #undefined').click()
     cy.get('#undefined').click()
     cy.wait(5000)
     cy.get('.user-dropdown').click()
     cy.get('[data-ik="1"] > .p-ripple > .p-menuitem-text').click()

})


  })