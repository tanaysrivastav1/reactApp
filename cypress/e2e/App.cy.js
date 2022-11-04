describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('http://localhost:3000');
  });
  it ('opens with Fall CS courses', () => {
    cy.visit ('http://localhost:3000');
    cy.get('[data-cy=course]').should('contain', 'Fall CS');
  });
});