describe('Amazon Search functionality', () => {

    before(() => {
        // Visit amazon website
        cy.visit('https://www.amazon.in/')
    })


    it('Should search for a product and display results', () => {
        cy.wait(20000)


        // cy.get('body').then(($body) => {
        //     if ($body.find('.a-box-inner > .a-text-center > img').length > 0) {
        //         // Model is present , close it
        //         cy.get('.a-box-inner > .a-text-center > img')
        //             .invoke('text')
        //             .then((captchaText) => {
        //                 cy.log(captchaText);
        //                 cy.get('#captchacharacters').type(captchaText)
        //                 cy.get('.a-button-text').click()
        //             })
        //     }
        // })

        // Enter search query in the search bar
        cy.get('#twotabsearchtextbox').type('laptop')

        // Click the Search button
        cy.get('#nav-search-submit-button').click();

        // Assert that search results are displayed
        cy.get('.s-main-slot').should('exist')

        

    })
})