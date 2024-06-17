class LoginPage {
    visit(){
        cy.visit('http://localhost:3000/')
    }

    getRegisterLink(){
        return cy.contains('Register')
    }

    getNameInput(){
        return cy.get('[formcontrolname="name"]');
    }

    getEmailInput(){
        return cy.get('[formcontrolname="email"]');
    }

    getPasswordInput(){
        return cy.get('[formcontrolname="password"]');
    }

    getLoginButton(){
        return cy.get('#signupBtn')
    }

    register(name, email, password){
        this.getNameInput().type(name);
        this.getEmailInput().type(email);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
    }

    getNotification(){
       return cy.get('[role="alert"]');
    }

    getPageTitle(){
        return cy.get('h1')
    }
}

export default LoginPage;