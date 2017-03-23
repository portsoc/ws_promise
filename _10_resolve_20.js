/**
* A Promise is a proxy for a value not necessarily
* known when the promise is created.  It represents
* that value, now, in the future, or never.
 *
 * Once a promise is resolved, its value does not change.
 *
 * The parameter passed to our report function is called
 * the Fulfillment Value.
 */

function report(x) {
  console.log(x);
}

let mypromise = Promise.resolve("for example");

// the value of a promise can
// be used after it has been resolved
mypromise.then(report);

// we can define the 'report' function above in several ways

// we could inline it
mypromise.then(function (x) { console.log(x) } );

// we could use 'fat arrow' to be more brief
mypromise.then(x => console.log(x));

// or since console.log takes one
// parameter just pass that as the
// callback when mypromise is resolved
mypromise.then(console.log);
