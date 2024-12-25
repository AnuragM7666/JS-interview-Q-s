// A closure is a feature where an inner function has an access to outer(enclosing) function's variables
// A closure is a combination of a function enclosed with references to it's lexical environment

function outerFunction(){
    let count = 0;

    function innerFunction() {
        count++;                //accessing and modifying outer function's variable
        console.log(count);
    }
    return innerFunction;
}

const counter = outerFunction();

counter(); //returns 1
counter(); //returns 2 
counter(); //returns 3