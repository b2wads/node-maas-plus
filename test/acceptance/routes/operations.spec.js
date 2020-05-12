const httpStatus = require('http-status')
const request = require('supertest')

const app = require('../../../app')

describe('[ Acceptance ] Plus operation routes', () => {
  context('GET /api/v1/operations/plus', () => {
    const left = 10
    const right = 20

    let res

    before(async () => {
      res = await request(app)
        .post('/api/v1/operations/sum')
        .send({ left, right })
    })

    it('should return 200', () => {
      expect(res.status).to.be.eql(httpStatus.OK)
    })

    it('should return the sum', () => {
      expect(res.body).to.be.eql({ result: 30 })
    })
  })
})
