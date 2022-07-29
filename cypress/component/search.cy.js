import { Search, List } from '../../src/components';

describe('<Search>', () => {
  const searchSelector = '[data-cy=search]';
  it.only('mounts', () => {
    cy.mount(<Search />);

    cy.get(searchSelector).should('have.text', '');
  });
});
