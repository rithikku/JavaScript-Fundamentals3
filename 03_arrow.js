const user = {
    username : "Rithik",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} Welcome to Website`); // this keyword is refering the current context
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); // throw {} in node, and give Windows in Browser 


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chaii();

// Arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
// chai();


// if you use {} then you have to write return keyword, and if you write in () then you not have to write return keyword 

// Explicit return 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// Implicit return 
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username : "hitesh"});

console.log(addTwo(3, 5));
