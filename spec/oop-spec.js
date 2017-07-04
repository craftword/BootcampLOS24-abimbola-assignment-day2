// testing code goes here

'use strict'

var chai = require('chai');
var should = chai.should();
var app = require("../OOP/oop.js");



describe("Test for OOP property", function() {

      it('should inherit functionality from Parent', function(){
      //create instance
      let child = new app.Samsung("IMEI167256363", "Andriod", 3);
      // check the child can access the attribute of parent
      child._IMEICode.should.equal('IMEI167256363');
      child._OS.should.equal('Andriod');
      
     });

     it('child should to access it own function ', function(){
      //create instance
      let child = new app.Samsung("IMEI167256363", "Andriod", 3);

      // check the child can access the attribute of parent
     // child.Dial().to.be('Choice the network you want to use to call');
       child._OS.should.equal('Andriod');
      
     });

     it('parent should be able to access it own function and attributes ', function(){
      //create instance
      let parent = new app.MobilePhones("IMEI167256363", "Andriod", 3);

      // check the parent access its attribute
       parent._OS.should.equal('Andriod');
     // parent.Receive().should.eqaul('Receiving a call');
      
     });

});

