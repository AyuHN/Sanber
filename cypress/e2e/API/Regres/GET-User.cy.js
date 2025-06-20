/// <reference types ="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

    describe ('API Testing', () => {
        it('Get API List User',() => {
            cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.not.be.null;
            })
        })
    })

    describe ('API Testing', () => {
        it('Get Single User',() => {
            cy.request('GET', 'https://reqres.in/api/users/2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null;
            })
        })
    })

    describe('API Testing', () => {
        it('Get Single User Not Found', () => {
            cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            headers: headers, 
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.equal({})
         })
        })
})