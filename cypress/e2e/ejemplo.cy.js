describe("Ejemplo", () => {
  it("La pagina de login carga", () => {
    cy.visit("/")
    cy.get("#usuario").should("be.visible")
  })
})
