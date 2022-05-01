
describe('Questions Page', () => {
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

    it('should be able to click on the Arts & Literature category', () => {
      cy.visit('http://localhost:3000/')
        cy.get('*[class^="arts-and-literature"]')
        .click({ force: true })
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

    it('should show the correct answer to the trivia question', () => {
      cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
        statusCode: 200,
        fixture: 'questions.json'
      })
      cy.visit('http://localhost:3000/')
        cy.get('*[class^="arts-and-literature"]')
        .click({ force: true })
        cy.get('*[class^="questions-container"]')
        .contains("William Shakespeare")
    })

    it('should show the correct answer to the trivia question', () => {
      cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
        statusCode: 200,
        fixture: 'questions.json'
      })
      cy.visit('http://localhost:3000/')
        cy.get('*[class^="arts-and-literature"]')
        .click({ force: true })
        cy.get('*[class^="questions-container"]')
        .contains("Arthur C. Clarke, Isaac Newton, Enid Blyton")
    })

    it('should show the difficulty', () => {
      cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
        statusCode: 200,
        fixture: 'questions.json'
      })
      cy.visit('http://localhost:3000/')
        cy.get('*[class^="arts-and-literature"]')
        .click({ force: true })
        cy.get('*[class^="questions-container"]')
        .contains("easy")
    })

    it('should have a button to take the user to their saved questions', () => {
      cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
        statusCode: 200,
        fixture: 'questions.json'
      })
      cy.visit('http://localhost:3000/')
        cy.get('*[class^="arts-and-literature"]')
        .click({ force: true})
        cy.get('*[class^="like-button"]')
          .should('have.text', "add to gameadd to game")
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
  })
