// cypress/e2e/ejemplo.cy.js
describe("Ejemplo", () => {
  it("La pagina de login carga", () => {
    cy.visit("/")
    cy.get("#usuario").should("be.visible")
  })
})
