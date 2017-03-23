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
 *
 * This executor function takes a "resolve"
 * parameter which is a function.
 *
 * Executor Functions normally do some async
 * work & when that completes, they call the
 * resolve function with a value.
 */
function alwaysResolve(resolve) {
  resolve("🏆")
}

function reportResolved(x) {
  console.log("Resolved", x);
}

let mypromise = new Promise(alwaysResolve);

// let mypromise = Promise.resolve("🏆");

mypromise.then(reportResolved);
