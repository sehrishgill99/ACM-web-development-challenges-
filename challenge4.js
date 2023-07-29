
//Challenge 4
const objectVariable = {
    property1: 'i am property 1 ';
    property2 : 'i am property 2';
    property3 : [20,30,40];
};
console.log(objectVariable.property3[2]);

// This code is invalid because we don't put ; in object after every element 
// Correct code

const objectVariable = {
    property1: 'i am property 1 ',
    property2 : 'i am property 2',
    property3 : [20,30,40],
};
console.log(objectVariable.property3[2]);

