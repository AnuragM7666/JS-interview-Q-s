//Q. Write a function createHelloWorld. It should return a new function that always returns "Hello World".


function createHelloWorld() {
    return function () {
        return("Hello World")
    }    
}

let Greet = createHelloWorld();
console.log(Greet());

// function createHelloWorld() {
//     return function () {
//         console.log("Hello World")
//     }    
// }

// let Greet = createHelloWorld();
// Greet();