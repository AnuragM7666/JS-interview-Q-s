// Q. Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// - arr[i] - number from the arr
// - i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
const filter = function (arr, fn) {
    const newArr = [];

    arr.forEach((val, i) => {
        if (fn(val, i)) {
            newArr.push(val);
        }
    })
    return newArr;
}

// Example usage
const arr = [0, 1, 2, 3, 4, 5];
const fn = function (n, i) {
    return n % 2 === 0;
}  // Filter even numbers
console.log(filter(arr, fn))

//By using filter() method

// function filter(arr, fn) {
//     const newArr = arr.filter(fn);
//     return newArr;
// }