//Async js - It allows us to execute next imp instructions immediately that are blocked due to some previous instructions.
//Callback - It is a function passed as an argument to another function.
//Callback Hell - Nested callbacks stacked below one another

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 3000);
    })
}

// //Callback hell

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         })
//     })
// })

// Promise is an object in JS that ensures 'eventual' completion of task. It is a solution to callback hell.

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res)
    });