/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API Testing - GET Users with Delayed Response', () => {
  it('Should handle delayed response correctly', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3',
      headers: headers,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array')
      expect(response.body.data.length).to.be.greaterThan(0)
      expect(response.body.data[0]).to.have.property('email')
    })
  })
})
