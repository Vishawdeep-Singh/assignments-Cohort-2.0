/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(resolve,milliseconds)
    })
    return promise;
}
sleep(4).then(()=>{
    console.log("After halting for 2000 milliseconds");
})


module.exports = sleep;
