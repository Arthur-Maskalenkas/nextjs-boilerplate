export const shouldBeOnTheRoute = (baseUrl:string, path: string) => {
  cy.url().should('eq', `${baseUrl}${path}`)
}