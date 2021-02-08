describe('redirecciona a cada vista', () => {
    beforeEach(() => {
        cy.visit('/')
      });

    it('Home', () => {
        cy.visit('/home');
    });
    it('About', () => {
        cy.visit('/about');
    });
    it('Contact', () => {
        cy.visit('/contact');
    });
    it('Info', () => {
        cy.visit('/info');
    });
    it('Registro', () => {
        cy.visit('/registration');
    });
    it('Rule', () => {
        cy.visit('/rules');
    });
    it('Chat', () => {
        cy.visit('/chat');
    });

  });