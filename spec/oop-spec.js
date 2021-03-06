// testing code goes here

'use strict';

let chai = require('chai');
let should = chai.should();
let app = require('../OOP/oop.js');



describe('Test for OOP attributes',() => {

    it('should inherit functionality from Parent',() =>{
        //create instance
        let child = new app.Samsung('IMEI167256363', 'Andriod', 3);
        // check the child can access the attribute of parent
        child._IMEICode.should.equal('IMEI167256363');
        child._OS.should.equal('Andriod');
      
    });

    it('child should to access it own method ',() =>{
        //create instance
        let child = new app.Samsung('IMEI167256363', 'Andriod', 3);

        // check the child can access the attribute of parent
         //child.Dial().to.be('Choice the network you want to use to call');
         child._OS.should.equal('Andriod');
      
    });

    it('parent should be able to access it own function and attributes ',() =>{
        //create instance
        let parent = new app.MobilePhones('IMEI167256363', 'Andriod', 3);

        // check the parent access its attribute
        parent._OS.should.equal('Andriod');
        // parent.Receive().should.eqaul('Receiving a call');
      
    });

});

