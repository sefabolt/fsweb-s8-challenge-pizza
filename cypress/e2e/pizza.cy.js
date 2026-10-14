describe("Pizza Sipariş Formu", () => {
  it("isim alanına metin girebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get("#name")
      .type("Sefa")
      .should("have.value", "Sefa");
  });

  it("birden fazla malzeme seçebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="checkbox"]')
      .eq(0)
      .check();

    cy.get('input[type="checkbox"]')
      .eq(1)
      .check();

    cy.get('input[type="checkbox"]')
      .eq(2)
      .check();

    cy.get('input[type="checkbox"]')
      .eq(3)
      .check();

    cy.get('input[type="checkbox"]:checked')
      .should("have.length", 4);
  });

  it("formu gönderebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get("#name").type("Sefa");

    cy.get('input[name="size"][value="medium"]')
      .check();

    cy.get('input[type="checkbox"]')
      .eq(0)
      .check();

    cy.get('input[type="checkbox"]')
      .eq(1)
      .check();

    cy.get('input[type="checkbox"]')
      .eq(2)
      .check();

    cy.get('input[type="checkbox"]')
      .eq(3)
      .check();

    cy.get('button[type="submit"]')
      .should("not.be.disabled")
      .click();
  });
});