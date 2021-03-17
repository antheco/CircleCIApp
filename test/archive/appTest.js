//variables
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var should = require('chai').should();
var events = require('events');

//instance of Eventemitter class
eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
  console.log('listner1 executed.');
}
// Bind the connection event with the listner1 function
eventEmitter.addListener('click', listner1);

chai.use(chaiHttp);

var server = require('../../app');

eventEmitter.emit('click');


describe('Webpage root load', () => {
  it('it should load default page', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
     // var result = res.statusCode
      expect(res.status).to.equal(200);
      expect(res).to.be.html;
      //expect(res.text).to.equal("This is a web page.");
      done();
    });
  })
});

