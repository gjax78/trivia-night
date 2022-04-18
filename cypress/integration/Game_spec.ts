describe('Game Page', () => {
  it('should display a header with a button for Home and a button for View Game', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')

    cy.visit('http://localhost:3000/questions')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
    cy.get('*[class^="view-game"]')
      .should('have.text', 'View Game')
    })

    it('should show a trivia question from the Arts & Literature category', () => {
      cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
        statusCode: 200,
        fixture: 'questions.json'
      })
      cy.visit('http://localhost:3000/')
        cy.get('*[class^="arts-and-literature"]')
        .click({ force: true })
        cy.get('*[class^="questions-container"]')
        .contains("Which author wrote 'Macbeth'?")
      })

      it('should be able to save the question to their game', () => {
        cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
          statusCode: 200,
          fixture: 'questions.json'
        })
        cy.visit('http://localhost:3000/')
          cy.get('*[class^="arts-and-literature"]')
          .click({ force: true})
          cy.get('*[class^="like-button"]')
          .click({ multiple: true, force: true })
      })

      it('should be able to click on the View Game button', () => {
        cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
          statusCode: 200,
          fixture: 'questions.json'
        })
        cy.visit('http://localhost:3000/')
          cy.get('*[class^="arts-and-literature"]')
          .click({ force: true})
          cy.get('*[class^="view-game"]')
          .click({force: true})
      })

      it('should be able to view their saved question on the View Game page', () => {
        cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
          statusCode: 200,
          fixture: 'questions.json'
        })
        cy.visit('http://localhost:3000/')
          cy.get('*[class^="arts-and-literature"]')
          .click({ force: true})
          cy.get('*[class^="like-button"]')
          .click({ multiple: true, force: true })
          cy.get('*[class^="view-game"]')
          .click({force: true})
          cy.get('*[class^="game-container"]')
          .contains("William Shakespeare")
      })

      it('should be able to delete their saved question on the View Game page', () => {
        cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
          statusCode: 200,
          fixture: 'questions.json'
        })
        cy.visit('http://localhost:3000/')
          cy.get('*[class^="arts-and-literature"]')
          .click({ force: true})
          cy.get('*[class^="like-button"]')
          .click({ multiple: true, force: true })
          cy.get('*[class^="view-game"]')
          .click({force: true})
          cy.get('*[class^="game-container"]')
          .contains("Remove From Game")
          .click({force: true})
      })

  })
