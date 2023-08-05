describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex', function() {
  it('navigation work yes ?', function() {
    cy.visit('http://localhost:3000')
    cy.contains('rattata').click()
    cy.get('.pokemon-ability-name:first').contains('run away')
    cy.get('.pokemon-ability-name:last').contains('hustle')
  })
})