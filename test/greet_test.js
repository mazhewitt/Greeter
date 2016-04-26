/**
 * Created by mazda on 26/04/2016.
 */
var sinon = require('sinon');
var chai = require('chai');
var renderGreeting = require('../routes/greeter')
var expect = chai.expect;


describe("Routes", function() {
    describe("GET Users", function() {

        it("should respond", function() {
            var req,res,spy;

            req = res = {};
            spy = res.render = sinon.spy();

            renderGreeting(req, res);
            var page = spy.getCall(0).args[0];
            var greetingJSON = spy.getCall(0).args[1];
            expect(spy.calledOnce).to.equal(true);
            expect (page).to.equal('index');
            expect (greetingJSON.greeting).to.equal('Hello World!');
        });

    });
});