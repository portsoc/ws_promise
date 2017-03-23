/**
 * A Promise represents a value which may be available
 * now, or in the future, or never." - MDN
 *
 * Once a promise is resolved, its value does not change.
 */

function report(x) {
  console.log(x);
}

let mypromise = Promise.resolve("for example");

mypromise.then(report);
mypromise.then(report);
mypromise.then(report);
