//var expect = require("chai").expect; //object - 
//vi kan dot into it - hvis man vil have en specifik feature fra obejct, destructuring
const {expect} = require('chai');

describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      done();  //Test will fail without this
    }, 1000);
  });

  it("should pass (with done called)", function(){
    expect(foo).to.equal(true);
  });
});