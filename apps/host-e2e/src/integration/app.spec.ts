import { getGreeting } from '../support/app.po';

describe('host', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome shop');
  });
});
