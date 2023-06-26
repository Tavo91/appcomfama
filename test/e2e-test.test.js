const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp)

const url = 'http://localhost:3000'

const app = require('../index').app

describe('Inserte el nombre y el precio', () => {
    it('Esperamos un nombre y un precio', (done) => {
        chai.request(url)
        .post('/api/v1/productos')
        .send({nombre: 'Monitor', precio: 2000})
        .end((error, response) => {
            console.log(response.body)
            expect(response).to.have.status(200)
            done()
        });
    })
})

// describe('Suite de prueba e2e para el curso', () => {
//     it('Esperamos un hola mundo', (done) => {
//         chai.request('http://localhost:3000')
//         .get('/')
//         .end((error, response) => {
//             console.log('A')
//             chai.assert.equal(response.text, 'Hola Mundo')
//             done()
//         })
//         console.log('B')
//     })
// })