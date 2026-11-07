// Serie II - Pruebas de Cypress para admin-productos
describe("Admin de Productos", () => {
  // Antes de cada prueba: abrir la pagina e iniciar sesion
  beforeEach(() => {
    cy.visit("/")
    cy.get("#usuario").type("admin")
    cy.get("#clave").type("1234")
    cy.get("#btn-login").click()
  })

  // Tarea 1: iniciar sesion y verificar que el panel sea visible
  it("Inicia sesion y muestra el panel de administracion", () => {
    cy.get("#admin").should("be.visible")
    cy.get("#login").should("not.be.visible")
    cy.contains("h1", "Administracion de Productos").should("be.visible")
  })

  // Tarea 2: agregar un producto y verificar que aparezca en la tabla
  it("Agrega un producto y aparece en la tabla", () => {
    cy.get("#nombre").type("Impresora")
    cy.get("#precio").type("750")
    cy.get("#stock").type("3")
    cy.get("#btn-guardar").click()

    cy.get("#tabla-productos tbody").should("contain", "Impresora")
    cy.get("#contador-productos").should("have.text", "6")
  })

  // Tarea 3: la aplicacion no permite agregar un producto con precio 0
  it("No permite agregar un producto con precio 0", () => {
    cy.get("#nombre").type("Producto gratis")
    cy.get("#precio").type("0")
    cy.get("#stock").type("5")
    cy.get("#btn-guardar").click()

    cy.get("#form-msg").should("contain", "El precio debe ser un numero mayor que 0.")
    cy.get("#tabla-productos tbody").should("not.contain", "Producto gratis")
    cy.get("#contador-productos").should("have.text", "5")
  })
})
