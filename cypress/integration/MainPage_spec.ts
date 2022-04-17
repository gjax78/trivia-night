describe('Main Page', () => {
  // beforeEach(() => {


  it('should display a header with a button for Home and a button for View Game', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
    cy.get('*[class^="view-game"]')
      .should('have.text', 'View Game')
    })

  it('should have a category button for Arts & Literature', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="arts-and-literature"]')
      .should('have.text', 'Arts & LiteratureArts & Literature')
  })

  it('should have a category button for Film & TV', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="film-and-tv"]')
      .should('have.text', 'Film & TVFilm & TV')

  })

  it('should have a category button for Food & Drink', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="food-and-drink"]')
      .should('have.text', 'Food & DrinkFood & Drink')

  })

  it('should have a category button for General Knowledge', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="general-knowledge"]')
      .should('have.text', 'General KnowledgeGeneral Knowledge')
  })

  it('should have a category button for Geography', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="geography"]')
      .should('have.text', 'GeographyGeography')
  })

  it('should have a category button for History', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="history"]')
      .should('have.text', 'HistoryHistory')
  })

  it('should have a category button for Music', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="music"]')
      .should('have.text', 'MusicMusic')
  })

  it('should have a category button for Science', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="science"]')
      .should('have.text', 'ScienceScience')
  })

  it('should have a category button for Society & Culture', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="society-and-culture"]')
      .should('have.text', 'Society & CultureSociety & Culture')
  })

  it('should have a category button for Sports & Leisure', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="sport-and-leisure"]')
      .should('have.text', 'Sports & LeisureSports & Leisure')
  })
})
