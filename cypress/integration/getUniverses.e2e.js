context('Universes page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/universes')

    cy.fixture('getUniverses').then((universes) => {
      cy.intercept('GET', '/universes', universes).as('getUniverses')
    })
  })

  it('renders a table with 3 columns', () => {
    const tableThElements = cy.get('th')
    tableThElements.should('have.length', 3)
  })

  it('has Id as one of the table columns', () => {
    const tableThElements = cy.get('th')
    const idCol = tableThElements.contains('Id')
    idCol.should('have.length', 1)
  })
})
