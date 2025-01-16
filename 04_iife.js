// Immediately Invoked Function Expression (IIFE)

// Global scope ke wajah se pollution hoti hai bhot baar toh global scope ke variable ya kuch decleration ko hatane ke liye hamlog IIFE ke use karte hain 

// named iife
(function chai(){ 
    console.log(`DB CONNECTED`);
})(); // Mandatory to write ;


( () => {
    console.log(`DB CONNECTED TWO`);
})();


// simple / unnamed iife
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("HITESH");