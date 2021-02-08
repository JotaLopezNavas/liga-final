describe('Busca los H1 y H2', () => {
    it('Busca los H1 y H2', () => {
      cy.visit('//');
      cy.get('h1');
      cy.get('h2');
      cy.visit('/about');
      cy.get('h1');
      cy.get('h2');
      cy.visit('/contact');
      cy.get('h1');
      cy.get('h2');
      cy.visit('/info');
      cy.get('h1');
      cy.get('h2');
      cy.visit('/registration');
      cy.get('h1');
      cy.get('h2');
      cy.visit('/rules');
      cy.get('h1');
      cy.get('h2');
      cy.visit('/chat');
      cy.get('h1');
      cy.get('h2');

    });
  });