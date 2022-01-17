const { Calculator, Print } = require(`./Calculator`)


const calculator1 = new Calculator();
console.log(calculator1.add(1, 2));

const calculatorAnswer = calculator1.add(1, 2);

const printAnswer = new Print();

printAnswer.print(calculatorAnswer);






