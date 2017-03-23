/**
 * A Promise represents a value which may be available
 * now, or in the future, or never." - MDN
 *
 * Once a promise is resolved, its value does not change.
 *
 * The parameter passed by "then" is called
 * the fulfillment value - it does not exist until
 * the promise is resolved.
 *
 * A fulfillment value does not change.  Each promise
 * is resolved only once.
 *
 * A fulfillment value can be any javascript primitive
 * type or object.
 *
 * We can construct a Promise object
 *
 * A resolved promise can be "fulfilled" or "rejected".
 */


/**
 * This is an executor function.
 * This Executor Functions accepts two parameters "resolve" and "reject"

 The resolve and reject functions, when called, resolve or reject the promise. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred.

 *
 * in this example the function pointed to by 'fulfill'
 * is always called, and the function poined to by reject
 * (which we don't bother specifying) is never called.
 */
function alwaysResolve(resolve) {
  resolve("🏆")
}

function reportResolved(x) {
  console.log("Resolved", x);
}

let mypromise = new Promise(alwaysResolve);

// let mypromise = Promise.resolve("🏆");

mypromise.then(reportFulfill);
