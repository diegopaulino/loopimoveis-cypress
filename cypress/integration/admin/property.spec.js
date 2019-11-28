const login = () => {
  cy.visit('/')
  cy.get('input[placeholder="Insira seu e-mail"]').type("admin@loopimoveis.com")
  cy.get('input[placeholder="Insira sua senha"]').type("admin")
  cy.get('[data-testid=login-signin]').click()
  cy.get('[data-testid="card"] h2', {timeout: 10000}).should('have.text', 'Seu perfil')
}

const accessMenu = () => {
  login()
  cy.get('[data-testid="sidebar"]')
  cy.get("strong:contains('Imóveis')").click()
}

const menuRegisterProperty = () => {
  cy.get('a:contains(Cadastrar Imóveis)').click()
}

const fillAdvertiserField = () => {
  cy.get('[name="advertiser"] input').type('Diego')
  cy.get('.visible div:first-child()').click()
}

context('Login', () => {
  beforeEach(() => {
    login()
  })
})

describe('Access advertiser menu and register', () => {
  it('register an property', () => {
    accessMenu()
    menuRegisterProperty()
    fillAdvertiserField()
  })
})