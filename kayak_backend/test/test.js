var assert = require('chai').assert;
var first = require('../routes/flights.js');
//var request = require("request");
var expect = require("chai").expect;
var baseurl = "http://localhost:3010";
var util = require("util");
var app = require('../app.js')
var chai = require("chai");
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe( " delete hotel API", function() {
 describe(" delete hotel API ", function() {
     it("Should return 201 response", function(done) {
         // Send some Form Data
          chai.request(baseurl)
         .post('/hotels/deletehotel')
         .send({
          hotel_id:'dukmb63597'
         })


         .end(function (err, res) {
           console.log(res.status);
             expect(res).to.have.status(201);
            // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
             done();
         });

     });

 });
});
describe( "Book Flight API", function() {
    describe("Book Flight  api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/bookflight')
            .send({
            user_id:'dyjfl00115',
            booking_date:'2017/1/11',
            booking_amount:456,
            start_date:'2016/11/11',
            end_date:'2017/11/11',
            flight_name:'british airways',
            src_city:'san jose',
            destination_city:'New York',
            flight_id:'SJS123'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});




        describe( "Book car API", function() {
    describe("Book car  api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/cars/bookcar')
            .send({
            user_id:'dyjfl00115',
            booking_date:'2017/1/11',
            booking_amount:'456',
            start_date:'2016/11/11',
            end_date:'2015/11/11',
            name:'Corolla',
            src_city:'San Jose',
            destination_city:'New York',
            rental_agency:'thrifty'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});
//  Test Case 1 : base url negative testing
describe("Base URL negative testing", function() {
    describe("Hit The Base URL", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request("http://localhost:3010/se")
            .get('/')

            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "Book Hotel API", function() {
    describe("Book Hotel  api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/cars/bookcar')
            .send({
            user_id:'dyjfl00115',
            booking_date:'2017/1/11',
            booking_amount:'456',
            start_date:'2016/11/11',
            end_date:'2015/11/11',
            name:'AC Hotel',
            src_city:'San Jose',
            destination_city:'New York',
            rental_agency:'thrifty'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


        describe( " Incorrect Book car API", function() {
    describe("Incorrect Book car  api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/cars/bookcars')
            .send({
            user_id:'dyjfl00115',
            booking_date:'2017/1/11',
            booking_amount:'456',
            start_date:'2016/11/11',
            end_date:'2015/11/11',
            name:'Corolla',
            src_city:'San Jose',
            destination_city:'New York',
            rental_agency:'thrifty'
            })

            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});
//  Test Case 2 : base url testing.
describe("Base URL Positive", function() {
    describe("Hit The Base URL", function() {
        it("Should return 200 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/')

            .end(function (err, res) {
                expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

// Test Case 3 : Search Flights API
describe("SearchFlights API", function() {
    describe("SearchFlights API", function() {
        it("Should return 200 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/searchflights')
            .send({
            start_date: '2017/12/05',
            src_city: 'test',
            destination_city:'test'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

// Test Case 4 : Incorrect Path
describe("Incorrect SearchFlights API", function() {
    describe("Incorrect SearchFlights API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/searchflig')
            .send({
            start_date: '2017/10/10',
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});describe( "Incorrect BookFlightAPI", function() {
    describe("Incorrect BookFlightAPI ", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/bookflights')
            .send({
            start_date: '2017/10/10',
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


describe( "Incorrect delete Flight API", function() {
    describe("Incorrect delete FlightAPI ", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/deleteflights')
            .send({
             flight_id:'abc123'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "Incorrect Search car API", function() {
    describe("Incorrect Search car API ", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/cars/searchca')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "Incorrect admin hotel billing API", function() {
    describe("Incorrect admin hotel billing API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn/adminhotelbilling')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


describe( "Incorrect admin update hotel admin API", function() {
    describe("Incorrect admin update hotel admin API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn/updatehotelamdin')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});




describe( "Incorrect admin search hotel billing API", function() {
    describe("Incorrect admin search hotel billing API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn//searchhotelsadmin')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});




describe( "Incorrect admin car search API", function() {
    describe("Incorrect admin car search  API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn//searchcarsadmin')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


describe( "Incorrect adminflightbilling API", function() {
    describe("Incorrect adminflightbilling  API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn/searchflightsadmin')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

/*describe( "car analysis API", function() {
    describe("car analysis api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/analysis/caranalysis')
            .send({
            date:'2017/11/11'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});*/

describe( "Incorrect updateflightadmin API", function() {
    describe("Incorrect updateflightadmin  API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn/searchflightsadmin')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


describe( "Incorrect searchflightsadmin API", function() {
    describe("Incorrect searchflightsadmin  API", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/adminn/searchflightsadmin')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


describe( "delete Flight API", function() {
    describe("delete FlightAPI ", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/deleteflight')
            .send({
            flight_id:'abc123'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});




describe( "correct Search car API", function() {
    describe("correct Search car API ", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/cars/searchcars')
            .send({
            src_city: 'los angeles',
            destination_city:'chicago'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "admin total sales API", function() {
    describe("admin total sales api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/analysis/admintotalsales')


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});



describe( "Delete car API", function() {
    describe("Delete car API ", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/cars/deletecar')
            .send({
            model_no: 'abc123'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});


describe( "search Hotel API", function() {
    describe("search hotel API ", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/hotels/searchhotels')
            .send({
            src_city: 'san jose'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "incorrect hotel analysis API", function() {
    describe("incorrect hotel analysis api", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/analysis/oness')
            .send({
            date:'2017/11/11'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "incorrect car analysis API", function() {
    describe("incorrect car analysis api", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/analysis/caranaly')
            .send({
            date:'2017/11/11'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "incorrect flight analysis API", function() {
    describe("incorrect flight analysis api", function() {

        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/analysis/flightanay')
            .send({
            date:'2017/11/11'
            })


            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});



/*describe( "admin hotel billing API", function() {
    describe("admin billing api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/admin/adminhotelbilling')
            .send({
            month:'11'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

*/
/*describe( "admin car billing API", function() {
    describe("admin car billing api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/admin/admincarbilling')
            .send({
            date:'2017/11/11'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});*/

/*
describe( " delete hotel API", function() {
 describe(" delete hotel API ", function() {
     it("Should return 201 response", function(done) {
         // Send some Form Data
          chai.request(baseurl)
         .post('/hotels/deletehotel')
         .send({
          hotel_id:'abc123'
         })


         .end(function (err, res) {
             expect(res).to.have.status(201);
            // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
             done();
         });

     });

 });
});*/

/*describe( "hotel analysis API", function() {
    describe("hotel analysis api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data

             chai.request(baseurl)
            .post('/analysis/one')
            .send({
            date:'2017-11-11'
            })


            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});*/

/*

describe( "admin flight billing API", function() {
    describe("admin flight billing api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/admin/adminflightbilling')
            .send({
            month:'11'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});





describe( "admin search flight API", function() {
    describe("admin search flight api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/admin/searchflightsadmin')
            .send({
            flightid:'ilc632',
            carrier_name:'british airways'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "admin search car API", function() {
    describe("admin search car api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/admin/searchcarsadmin')
            .send({
            model_no:'nissan versa',
            name:'thrifty'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});

describe( "admin search hotel API", function() {
    describe("admin search hotel api", function() {
        it("Should return 201 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/admin/searchhotelsadmin')
            .send({
            hotel_id:'dyjfl00115',
            hotel_hname:'fisher group'
            })

            .end(function (err, res) {
                expect(res).to.have.status(201);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");
                done();
            });

        });

    });
});
*/
