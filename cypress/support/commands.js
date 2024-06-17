// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "./pageObjects/loginPage"

// Login
Cypress.Commands.add('register', (name, email, password) => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.getRegisterLink().click();
    loginPage.register(name, email, password);
    loginPage.getNotification()
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal('User signup successfully!!!')
        })

    // Verify Sign In page
    loginPage.getPageTitle()
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal('Sign In');
        });
})