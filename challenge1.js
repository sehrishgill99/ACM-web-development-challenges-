//Challenge  NO. 1
//1 
const myBoolean = true; 
//2 
const myString = 'Hello World';
//3 
const firstNumber = 20;
//4 
let secondNumber = 40 
secondNumber = 80 

const myArray = [ myBoolean , myString];
console.log(myArray);

const myObject = { firstProperty : myArray , sumProperty : firstNumber + secondNumber };
console.log(myObject); 

console.log(myObject.secondProperty);
 
console.log(myObject.firstProperty[1]);


