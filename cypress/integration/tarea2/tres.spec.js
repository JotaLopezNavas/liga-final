const { before } = require("cypress/types/lodash");

describe('Busca el logo', () => {
    it('Busca el logo', () => {
      cy.visit('/');
    });
  });