import { getGreeting } from '../support/app.po';

describe('cart', () => {
  beforeEach(() => cy.visit('/cart'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome cart');
  });
});
