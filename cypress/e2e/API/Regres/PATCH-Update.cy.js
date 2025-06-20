/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API Testing - PATCH User', () => {
  it('Update partial data user (job only)', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      headers: headers,
      body: {
        nama : 'morpheus',
        job: 'zion resident'
      }
    
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('nama', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    })
  })
})
