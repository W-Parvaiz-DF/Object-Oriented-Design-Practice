class Calculator {

    /*constructor() {
        this.ans = 0;
    }
    */

    add(num1, num2) {
        return num1 + num2;

    };

    subtract(num1, num2) {
        return num1 - num2;
    };



};


class Print {
    /* constructor() {
         this.calculator = new Calculator();
     }
 */


    print(ans) {
        return console.log(`The answer is: ${ans}`);

    }

}

//maybe get answer from calc? could couple them?


module.exports = { Calculator, Print }