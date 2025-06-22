/// <reference types ="cypress" />

const headers = {'x-api-key': 'reqres-free-v1'}

    describe('API testing', () => {
        it('Post login with valid credential', () => {
            cy.request({
                method: 'POST',
                url :'https://reqres.in/api/login',
                headers: headers,
                body: {
                     email: 'eve.holt@reqres.in',
                     password: 'cityslicka'
                }
            }).then((response)=> {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
            })
        })

    describe('API testing', () => {
         it('Post login with invalid credential (missing password)', () => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                headers: headers,
                failOnStatusCode: false, 
                body: {
                    email: 'peter@klaven'
                }
            }).then((response) => {
              expect(response.status).to.eq(400)
              expect(response.body).to.have.property('error', 'Missing password')
          })
      })
})

    })
    