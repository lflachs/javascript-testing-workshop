describe("template spec", () => {
  it("Should add a todo item", () => {
    cy.visit("http://localhost:8888");
    cy.get(".new-todo").type("Flying to the moon").type("{enter}");
    expect(cy.get(".todo-list li").should("have.length", 1));
    expect(cy.get(".todo-list li").should("have.text", "Flying to the moon"));
  });
  it("When a user click it should mark the item as done", () => {
    cy.visit("http://localhost:8888");
    cy.get(".new-todo").type("Flying to the moon").type("{enter}");
    cy.get(".todo-list li .toggle").click();
    expect(cy.get(".todo-list li").should("have.class", "completed"));
  });
});
