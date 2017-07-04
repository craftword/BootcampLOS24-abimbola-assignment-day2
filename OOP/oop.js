class MobilePhones  {
    constructor(IMEICode, OS, SIMCard) {
        
        // If it is, use it to initialize "this" Phone
        this._IMEICode = IMEICode;
        this._SIMCard = SIMCard;
        this._OS = OS;
        
    }

    Dial() {
        // Dialing numbers 
        // ...
        if(this._SIMCard >= 2) {
            console.log("Choice the network you want to use to call");
        }else {
            console.log("Dial the numbers .......")
        }
    }

    Receive() {
        // Receive a call
        // ...
        console.log("Receiving a call");
    }
    SendMessage() {
        // Send an SMS 
        // ...
        console.log("sending a message");
    }
   
}

class Samsung extends MobilePhones {
    constructor(IMEICode, OS, SIMCard) {
        super(IMEICode, OS, SIMCard);
        
    }
    AboutPhone() {
        console.log("I am chatting"); 
    }

}

class iPhone extends MobilePhones {
    constructor(IMEICode, Processor, internalMemory, SIMCard) {
        super(IMEICode, Processor, internalMemory, SIMCard);
        
    }

}

exports.MobilePhones = MobilePhones;
exports.Samsung = Samsung;