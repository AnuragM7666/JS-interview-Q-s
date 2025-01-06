/* Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".*/

var expect = function (val) {
    return {
        toBe: (otherVal)=> { 
            if (val === otherVal) { 
                console.log("toBe Test passed")
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (otherVal) => {
            if (val !== otherVal) {
                console.log("notToBe test passed")
                return true;
            } else {
                throw new Error("Equal");
            }
        } 
    }
}

try {
    expect(5).toBe(5); 
} catch (error) {
    console.error(error.message);
}

try {
    expect(5).notToBe(3); 
} catch (error) {
    console.error(error.message);
}
