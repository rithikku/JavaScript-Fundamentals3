function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("H");
    console.log("I");
    console.log("K");
}
// sayMyName();

// function addTwoNumbers(number1, number2){ // number1, number2 these are parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 5); // 2, 5 these are arguments

function addTwoNumbers(number1, number2){

    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(2, 5);
// console.log("Result : ", result); // undefined


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter your username");
        return;
    }
    return `${username} just logged in`;
}

// Modified code 
function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter your username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Rithik"));
// console.log(loginUserMessage());


// Shopping cart 
// ... is both Rest and Spread operator, it can depend upon his usecases
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 300, 500, 2000));


// In this you can do both first make then pass, and pass then make -- Both are same
const user = {
    username : "Rithik",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username : "sam",
    price : 200
})


const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
