class MobilePhones  {
    constructor(IMEICode, OS, SIMCard) {
        
        // If it is, use it to initialize "this" Phone
        this._IMEICode = IMEICode;
        this._SIMCard = SIMCard;
        this._OS = OS;

        this.Dial =() => {
            // Dialing numbers 
            // ...
            if(this._SIMCard >= 2) {
                console.log('Choice the network you want to use to call');
            }else {
                console.log('Dial the numbers .......');
            }
        };

        this.Receive =() => {
            // Receive a call
            // ...
            console.log('Receiving a call');
        };
        this.SendMessage =() => {
            // Send an SMS 
            // ...
            console.log('sending a message');
        };
    

    }
   
}

class Samsung extends MobilePhones {
    constructor(IMEICode, OS, SIMCard) {
        super(IMEICode, OS, SIMCard);
        this.chat =() => {
            console.log('I am chatting'); 
        };          
    }
    

}



exports.MobilePhones = MobilePhones;
exports.Samsung = Samsung;