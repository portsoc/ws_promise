/**
 * A Promise represents a value which may be available
 * now, or in the future, or never." - MDN
 *
 * Once a promise is resolved, its value does not change.
 *
 * The parameter passed by "then" is called
 * the Fulfillment Value - it does not exist until
 * the promise is resolved.
 */


// function report(x) {
//   console.log(x);
// }

// the value of a promise can
// be used after it has been resolved
let mypromise = Promise.resolve("for example");

mypromise.then(console.log);
mypromise.then(console.log);
mypromise.then(console.log);
mypromise.then(console.log);
