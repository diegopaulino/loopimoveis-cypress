const login = () => {
  cy.visit('/')
  cy.get('input[placeholder="Insira seu e-mail"]').type("admin@loopimoveis.com")
  cy.get('input[placeholder="Insira sua senha"]').type("admin")
  cy.get('[data-testid=login-signin]').click()
  cy.get('[data-testid="card"] h2', {timeout: 10000}).should('have.text', 'Seu perfil')
}

const advertiserMenu = () => {
  login()
  cy.get('[data-testid="sidebar"]')
  cy.get("strong:contains('Anunciantes')").click()
}

const menuRegisterAdvertiser = () => {
  cy.get('a:contains(Cadastrar Anunciantes)').click()
}

const fillNameAdvertiser = () => {
  const faker = require('faker')
  cy.get('[data-testid="name-input"] input').type(faker.name.findName())
}

const fillProfile = () => {
  cy.get('.default').type('Proprietário')
  cy.get('.visible .menu').type('{enter}')
}

const fillDocument = () => {
  cy.get('[data-testid="cpf-cnpj-input"] input').type('39344029312')
}

const fillXml = () => {
  cy.get('[data-testid="xml-input"] input').type('http://xml.example.com.br/xml/file.xml')
}

const fillCreci = () => {
  cy.get('[data-testid="creci-input"]').type('CRECI012030493484940')
}

const fillEmail = () => {
  cy.get('[data-testid="email-input"]').type('teste@teste.com.br')
}

const fillTelephone = () => {
  cy.get('[data-testid="phone-input"]').type('11928392838')
}

const fillLocation = () => {
  cy.get('[data-testid="location-input"]').type('Avenida Paulista')
  cy.get('.pac-container div.pac-item:first-child').click()
}

const sendForm = () => {
  cy.get('[data-testid="save-button"]').click()
  cy.get('[data-testid="button"]').contains('Salvar').click()
  cy.get('[data-testid="button"]').contains('Fechar').click()
}

context('Login', () => {
  beforeEach(() => {
    login()
  })
})

describe('Access advertiser menu and register an advertiser', () => {
  it('register an advertiser', () => {
    advertiserMenu()
    menuRegisterAdvertiser()
    fillNameAdvertiser()
    fillProfile()
    fillDocument()
    fillXml()
    fillCreci()
    fillEmail()
    fillTelephone()
    fillLocation()
    sendForm()
  })
})