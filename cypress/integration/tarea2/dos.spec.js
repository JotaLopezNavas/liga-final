describe('Busca NAVBAR dentro del chat', () => {
    it('Busca NAVBAR dentro del chat', () => {
      cy.visit('/chat');
      cy.get('#navbar-toggle-collapse');

    });
  });