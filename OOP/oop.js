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
    constructor(IMEICode, Processor, internalMemory, SIMCard) {
        super(IMEICode, Processor, internalMemory, SIMCard);
        
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
const phone = new MobilePhones;
const galaxy = new Samsung();
const iPhone7 = new iPhone();
galaxy._PhoneNumber = "Andriod 5";
console.log(galaxy._OS);
galaxy.Dial("08027313450");
iPhone7.Receive(); 
console.log(iPhone7._OS);
galaxy._SIMCard = 3;
galaxy.Dial();