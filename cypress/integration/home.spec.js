
describe('home page', ()=> {
    const url = Cypress.config("baseUrl")

    it('app deve estar online', () => {
        cy.viewport(1440,900)
        cy.visit(url)

        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    });
})