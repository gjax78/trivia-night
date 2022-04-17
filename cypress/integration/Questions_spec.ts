describe('Main Page', () => {
  it('should display a header with a button for Home and a button for View Game', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'

    }).as('matchedUrl')
    cy.visit('http://localhost:3000/questions')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
    cy.get('*[class^="view-game"]')
      .should('have.text', 'View Game')
    })


    // it('should display a question card with text', () => {
    //   cy.visit('http://localhost:3000/questions')
    //     .should('have.text', 'Arts & Literature')
    //   })
  })
