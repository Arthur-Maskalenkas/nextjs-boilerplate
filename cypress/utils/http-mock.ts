import { faker } from '@faker-js/faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept('POST', url, {
    statusCode: 401,
    body: {
      error: faker.random.words(5)
    },
    delay: 50
  }).as('request')
}

export const mockServerError = (url: RegExp, method: string): void => {
  cy.intercept({ method, url }, {
    statusCode: faker.datatype.number({ min: 402, max: 500 }),
    body: {
      error: faker.random.words(5)
    },
    delay: 50
  }).as('request')
}

export const mockSuccess = (url: RegExp, method: string, body: any): void => {
  cy.intercept({ method, url }, {
    statusCode: 200,
    body,
    delay: 50
  }).as('request')
}

export const mockForbiddenError = (url: RegExp, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 403,
    body: {
      error: faker.random.words()
    },
    delay: 50
  }).as('request')
}