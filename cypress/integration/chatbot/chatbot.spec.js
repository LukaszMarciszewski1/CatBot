
describe('chatbot', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('adding message', () => {
  it('creating a new message and displaying the answer for the keyword hej', () => {
    const typeText = 'hej'

    cy.visit('/')
    cy.get('df-messenger')
      .shadow()
      .find('df-messenger-chat')
      .shadow()
      .find('df-messenger-user-input')
      .shadow()
      .find('.input-container')
      .find('.input-box-wrapper')
      .find('input')
      .click()
      .type(typeText, { force: true })
      .type('{enter}')
      .should('have.value', '')

    cy.get('df-messenger')
      .shadow()
      .find('df-messenger-chat')
      .shadow()
      .find('df-message-list')
      .shadow()
      .find('#messageList  > .user-message')
      .should('be.visible')
      .and('contain', typeText)

    cy.get('df-messenger')
      .shadow()
      .find('df-messenger-chat')
      .shadow()
      .find('df-message-list')
      .shadow()
      .find('#messageList  > .bot-message')
      .should('be.visible')
      .and('have.length', 1)
  })

  it('creating a new message and displaying the answer for the keyword cześć', () => {
    const typeText = 'cześć'

    cy.visit('/')
    cy.get('df-messenger')
      .shadow()
      .find('df-messenger-chat')
      .shadow()
      .find('df-messenger-user-input')
      .shadow()
      .find('.input-container')
      .find('.input-box-wrapper')
      .find('input')
      .click()
      .type(typeText, { force: true })
      .type('{enter}')
      .should('have.value', '')

    cy.get('df-messenger')
      .shadow()
      .find('df-messenger-chat')
      .shadow()
      .find('df-message-list')
      .shadow()
      .find('#messageList  > .user-message')
      .should('be.visible')
      .and('contain', typeText)

    cy.get('df-messenger')
      .shadow()
      .find('df-messenger-chat')
      .shadow()
      .find('df-message-list')
      .shadow()
      .find('#messageList  > .bot-message')
      .should('be.visible')
      .and('have.length', 1)
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})