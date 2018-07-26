const supertest = require("supertest"), 
      chai      = require("chai"), 
      server    = require("../server");
      request   = supertest(server);
chai.should(); 

describe("GET views", function () {
    it('Should return the index page', function () {
        return request.get(`/`)
            .then(response => {
                var {
                    status, 
                    body
                } = response
                status.should.eql(200)
            })
    });
})
