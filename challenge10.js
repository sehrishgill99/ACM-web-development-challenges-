//challenge 10 
const myObj = {
    nestedObject1:{
        price: 100,
        quantity ; 5
    },
    nestedObject2 :
    {
        price 150,
        quantity: 2
    }
};
const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result =
    (myArray[0].price * myArray[0].quantity)>
    (myArray[1].price * myArray.quantity);


    //The answer is true because 500 > 300
    