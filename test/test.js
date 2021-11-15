var request = require('supertest');
var app = require('../index.js');

describe('GET /', function(){
	it('respond with Sajidullah Baig', function(done) {

		request(app).get('/').expect('Sajidullah Baig', done);
	});
});
