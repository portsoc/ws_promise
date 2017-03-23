/**
 * A Promise represents a value which may be available
 * now, or in the future, or never." - MDN
 *
 * Once a promise is resolved, its value does no change.
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
 */

let mypromise = Promise.resolve(99);

mypromise.then(console.log);
mypromise.then(x => console.log(x+1));
mypromise.then(x => console.log(x+2));
mypromise.then(x => console.log(x+3));

// here the filfillment value does not change - it is
// the number 99 each time, and we alter that when
// we report on it.
