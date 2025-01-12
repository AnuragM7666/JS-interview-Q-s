// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
//  It can resolve any value.

async function sleep(millis) {
    return new Promise(resolve => { 
        setTimeout(resolve, millis)
    })
}

(async () => { //IIFE
    console.log("Start");
  await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)
    console.log("End after 2 seconds");
})();