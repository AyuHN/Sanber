/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API Testing', () => {
  it('PUT- Should delete user by ID', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/4', 
      headers: headers,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(204)
      expect(response.body).to.be.empty
    })
  })
})
