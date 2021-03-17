var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

var server = require('../app');

describe('Webpage root load', () => {
  it('it should load default page', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
     // var result = res.statusCode
      expect(res.status).to.equal(200);
      expect(res.body).to.be.html;
      done();
    });
  })
});
