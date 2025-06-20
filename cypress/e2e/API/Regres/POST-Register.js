/// <reference types ="cypress" />

const headers = {'x-api-key': 'reqres-free-v1'}

    describe('API testing', () => {
        it('Post Register Successfull', () => {
            cy.request({
                method: 'POST',
                url :'https://reqres.in/api/register',
                headers: headers,
                body: {
                    email : 'eve.holt@reqres.in',
                    password : 'pistol'
                }
            }).then((response)=> {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
            })
        })

    })
    describe('API testing', () => {
        it('Post Register unsuccesful (missing password)', () => {
            cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: headers,
            failOnStatusCode: false, 
            body: {
                email: 'sydney@fife'
            }
         }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
     })
})
    