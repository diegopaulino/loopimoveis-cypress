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
  cy.get('div.visible div span:first-child').contains('Anunciante 11112019 - diego@teste.com.br ').click()
}

const fillPropertyType = () => {
  let propety_types = [
    "Apartamento", "Casa", "Sobrado", "Sala Comercial", "Terreno", "Cobertura", "Galpão/Depósito/Armazém", "Comercial", "Prédio Comercial",
    "Loja/Ponto Comercial", "Casa de Condomínio", "Lote/Terreno", "Kitnet", "Loja", "Flat", "Chácara", "Prédio", "Studio",
    "Industrial", "Rural", "Loft"
  ]

  let chosen_type = propety_types[Math.floor(Math.random() * propety_types.length)]

  cy.get('[data-testid="propertiesType-dropdown"]').contains('div.default', 'Selecione').type(`${chosen_type}`)
  cy.get('div.visible').contains(`${chosen_type}`).click()
}

const fillHighlight = () => {
  let highlight = ["Destaque", "Super Destaque", "Super Destaque / Destaque"]
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
    fillPropertyType()
    fillHighlight()
  })
})