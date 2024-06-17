import LoginPage from "../../support/pageObjects/loginPage"

describe('Implement page object model', () => {
    const loginPage = new LoginPage();

    it('Register User', () => {

        // Hello world
        loginPage.visit();
        loginPage.getRegisterLink().click();
        loginPage.register('Mayur', 'm@gmail.com', '12345');

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
})