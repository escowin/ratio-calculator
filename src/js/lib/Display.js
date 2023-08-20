const Calculator = require("./Calculator");

class Display extends Calculator {
    constructor(num1, num2, num3, num4) {
        // inherited Calculator properties
        super(num1, num2, num3, num4);
        // properties | this.var = paramVar;
        this.x = "hi"
    }

    // methods | domFunction() {...}
}

module.exports = Display;