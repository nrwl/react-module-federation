import { getGreeting } from '../support/app.po';

describe('about', () => {
  beforeEach(() => cy.visit('/about'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome about');
  })

});
