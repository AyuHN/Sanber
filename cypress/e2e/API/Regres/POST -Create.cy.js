/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API Testing', () => {
  it('Post Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: headers,
      body: {
        name: "morpheus",
        job: "leader"
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'leader')
      expect(response.body).to.have.property('id') 
      expect(response.body).to.have.property('createdAt')
    })
  })
})
