import { shouldBeOnTheRoute, shouldButtonBe } from '../utils'

const baseUrl: string = Cypress.config().baseUrl || '/'

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('default', () => {
    it('Should load with header, footer and button', () => {
      shouldButtonBe('Botão', false)

      cy.get('header').should('exist')
      cy.get('footer').should('exist')
    })

    it('Should present in home page on initial state', () => {
      shouldBeOnTheRoute(baseUrl, '/')
    })
  })
})