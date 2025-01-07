/* Given an integer n, return a counter function.
This counter function initially returns n and then returns 1 more than the previous value every subsequent time
it is called (n, n + 1, n + 2, etc). */

var counter = function (n) {
    return function () {
        return n++;
    }
}

const Count = counter(5);

console.log(Count());
console.log(Count());
console.log(Count());

