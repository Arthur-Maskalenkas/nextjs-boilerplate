export const shouldButtonBe = (nameButton: string, disabled = false) => {
  disabled
    ? cy.findByRole('button', { name: nameButton })

      .should('have.attr', 'disabled')
    : cy.findByRole('button', { name: nameButton })
      .should('not.have.attr', 'disabled')
}