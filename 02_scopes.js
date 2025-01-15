// var c = 200;

let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){ // -- Two chota hai ye One se icecream maang sakta hai
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);

    two();
    
}

one();


if(true) {
    const username = "hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++ Interesting +++++++++++++++++ 

addOne(5);
function addOne(num){
    return num + 1;
}


addTwo(5); // -- This throw Error
const addTwo = function(num){
    return num + 2;
}