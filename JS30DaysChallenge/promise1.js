// Given two promises promise1 and promise2, return a new promise.promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

var addPromises = async (prmoise1, promise2) => {
    const [result1, result2] = await Promise.all([prmoise1, promise2]);
    return result1 + result2;
}

var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 400));
var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 600));

addPromises(promise1, promise2).then(sum => {
    console.log(sum); // Output: 7
});

// var addTwoPromise=async function (prmoise1, promise2) {
//     return Promise.all([promise1, promise2])
//         .then(([res1, res2]) => res1 + res2);
// }