let jasmine = require("jasmine")
let phone = require("../OOP/oop.js");

'use strict';
  describe("Mobile Phone Class: Check typeof and instanceOf", function() {

    it("The MobilePhone should be a type of `object`, and an instance of the `MobilePhone` class", function() {
      let galaxy = new phone.MobilePhones("IMEI464836367", "OS", 2);
      expect(typeof galaxy).toEqual(typeof {});
      expect(galaxy instanceof phone.MobilePhones()).toBeTruthy();
    });
/*
    it("The MobilePhones should be called 'MobilePhones' if no name is passed as a parameter", function() {
      let x5 = new phone.MobilePhones("8w7e89w9","IOS",3);
	    expect(x5.Receive()).toEqual('Receiving a call');
        expect(x5.SendMessage()).toEqual("sending a message");
    });*/

   
    
  });
  
