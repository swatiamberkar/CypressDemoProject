describe('My Sample test', () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Verify url of application', () => {
        const name = 'Akshay';
        const email = 'ak@gmail.com';
        const password = '12345'
        cy.wait(5000);
        cy.visit('http://localhost:3000/', { timeout: 60000 })
        cy.url().should('include', 'login-signup');
        cy.contains('Register').click();

        // Verify Sign up page
        cy.get('h1')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Sign Up');
            });

        cy.get('[formcontrolname="name"]').type(name);
        cy.get('[formcontrolname="email"]').type(email);
        cy.get('[formcontrolname="password"]').type(password);

        cy.get('#signupBtn').click();

        cy.get('[role="alert"]')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('User signup successfully!!!')
            })

        // Verify Sign In page
        cy.get('h1')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Sign In');
            });

        cy.get('[formcontrolname="email"]').type(email);
        cy.get('[formcontrolname="password"]').type(password);
        cy.get('#signinBtn').click();
        cy.wait(5000);
        cy.get('h1')
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal('Contact Management System');
        })
    })


    // it('Click register link and verify Sign Up page.', ()=>{
    //     cy.contains('Register').click();
    // })

})