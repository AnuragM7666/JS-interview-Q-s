//async function always returns a promise.
//await pauses execution of its surrounding async func until promise is settled

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 3000);
    })
}

async function getAllData() { //we can use IIFE here
    for (i = 1; i <= 4; i++){
        console.log("getting data" + i);
        await getData(i);
    }
}
getAllData(); //if IIFE func is used , there is no need to call it like this

//for simpler execution we use async-await more than .then()
//IIFE func is an unnamed func used that is executed automatically only once and can't be used again 