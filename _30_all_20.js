/*
  This is a slightly configurable demo of promises.
  Changing the value of count will change the number
  of promises that are created, and which must
  randomly delay the completion of the program.

  The report function runs twice.  Initially it is called directly, which queues up the promises for
  execution (because their 'then' methods are invoked).

  As soon as this invokation loop has completed (which will be almost instantaneous because each promise sets a timeout of random length [up to one second]) a second call to report is made, this second call is dependent on all() the promises in the promise array having completed.  Thus, the first time the delay times are reported they are in completion order (because as soon as a promise is resolved it's resolution can be logged), but the second time the delay times are reported, the promises are resolved already, so the delay times are written in array order.sorting

  */

let count = 12;
let promises = [];

function randomPause(fulfill, reject) {
  let sleepTime = Math.random() * 1000;
  setTimeout(() => fulfill(sleepTime), sleepTime);
}

// create 'count' new promises
for (let i = 0; i < count; i++) {
  promises.push(
    new Promise(randomPause)
  );
}

// write each promise to the console as soon
// as it is resolved.
function report() {
  console.log("\nall >");
  promises.forEach((p) => p.then(console.log));
}

// first report call will set up 'thens' so that
// ther result of every promise will be queued to
// be reported as soon as it's resolved.
report();

// this second report 'call' will set up 'thens' so that
// ther result of every promise will be reported, but this
// setup only happens once ALL the promises are resolved so
// they are reported in array order, not order of
// completion
Promise.all(promises).then(report)
