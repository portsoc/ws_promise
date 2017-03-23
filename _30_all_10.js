function conclude() {
    console.log("finished")
}

/**
 * Executor function that creates a random
 * number between 0 and 1000 and then sleeps
 * for that number of milliseconds.
 *
 * Upon waking the promise is fulfilled, and the
 * fulfilment value is set to the sleep time.
 */
function randomPause(fulfill, reject) {
  let sleepTime = Math.random() * 1000;
  setTimeout(() => fulfill( sleepTime ), sleepTime);
}

let p1 = new Promise(randomPause);
let p2 = new Promise(randomPause);
let p3 = new Promise(randomPause);

Promise.all([p1,p2,p3]).then(conclude)

p1.then(console.log);
p2.then(console.log);
p3.then(console.log);
