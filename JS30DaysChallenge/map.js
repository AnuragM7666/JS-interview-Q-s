// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built -in Array.map method.

var map = function (arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }
    return newArr;
}

const arr = [12, 24, 45, 46, 59];

let fn = (val, i) => {
    return val*i;
}

const mappedArr = map(arr, fn);

console.log(mappedArr);

//using map() function

// const map = function (arr, fn) {
//     const newArr = arr.map(fn);
//     return newArr;
// }


// //When to Use Each:
// map(): When you want to transform every element
// reduce(): When you want to combine all elements into one result
// filter(): When you want to select only certain element
const result = [1, 2, 3, 4, 5]
    .filter(n => n > 2)        // [3, 4, 5]
    .map(n => n * 2)           // [6, 8, 10]
    .reduce((sum, n) => sum + n, 0); // 24