// Test Javascript

var request = require('request'),
expect = require('chai').expect,
cheerio = require('cheerio')

var baseUrl = 'http://localhost:3000';

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('Catchphrasely Title', function() {
  it('should have "Catchphrasely" in title', function(done) {
    request(baseUrl, function(err, res, body) {
      var $ = cheerio.load(body);
      var title = $("title").text();
      expect(title).to.equal("Catchphrasely")
      // expect(title).to.equal("Nope")
      done();
    });
  });
});

describe('Catchphrasely resource routes', function() {
  it('GET should return 200', function(done) {
    request(baseUrl + '/api/phrases', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // expect(res.statusCode).to.equal(300);
      done();
    });
  });
  it('POST should return 200', function(done) {
    request.post(baseUrl + '/api/phrases', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // expect(res.statusCode).to.equal(300);
      done();
    });
  });
  it('PUT should return 200', function(done) {
    request.put(baseUrl + '/api/phrases/1', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // expect(res.statusCode).to.equal(300);
      done();
    });
  });
  it('DELETE should return 200', function(done) {
    request.del(baseUrl + '/api/phrases/:id', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // expect(res.statusCode).to.equal(300);
      done();
    });
  });
});