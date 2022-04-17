describe('Main Page', () => {
  it('should display a header with a button for Home and a button for View Game', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
    cy.get('*[class^="view-game"]')
      .should('have.text', 'View Game')
    })

  it('should have a category button for Arts & Literature', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="arts-and-literature"]')
      .should('have.text', 'Arts & Literature')
  })

  it('should have a category button for Film & TV', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="film-and-tv"]')
      .should('have.text', 'Film & TV')
  })

  it('should have a category button for Food & Drink', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="food-and-drink"]')
      .should('have.text', 'Food & Drink')

  })

  it('should have a category button for General Knowledge', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="general-knowledge"]')
      .should('have.text', 'General Knowledge')
  })

  it('should have a category button for Geography', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="geography"]')
      .should('have.text', 'Geography')
  })

  it('should have a category button for History', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="history"]')
      .should('have.text', 'History')
  })

  it('should have a category button for Music', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="music"]')
      .should('have.text', 'Music')
  })

  it('should have a category button for Science', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="science"]')
      .should('have.text', 'Science')
  })

  it('should have a category button for Society & Culture', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="society-and-culture"]')
      .should('have.text', 'Society & Culture')
  })

  it('should have a category button for Sports & Leisure', () => {
    cy.intercept('GET', 'https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20', {
      statusCode: 200,
      fixture: 'questions.json'
    }).as('something')
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="sport-and-leisure"]')
      .should('have.text', 'Sports & Leisure')
  })
})
