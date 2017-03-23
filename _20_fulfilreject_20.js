
/**
 * This is a function that accepts two parameters
 * fulfill and reject.  fulfill is always called.
 * reject is never called.
 */
function alwaysFulfill(fulfill, reject) {
  fulfill("🏆")
}

function reportFulfill(x) {
  console.log("Fulfilled", x);
}

function alwaysReject(fulfill, reject) {
  reject(new Error("💥"));
}

function reportRejected(x) {
  console.log("Rejected", x.message);
}

let alwaysFulfilledPromise = new Promise(alwaysFulfill);
let alwaysRejectedPromise = new Promise(alwaysReject);

alwaysRejectedPromise.then(reportFulfill, reportRejected)
alwaysFulfilledPromise.then(reportFulfill, reportRejected);
alwaysFulfilledPromise.then(reportFulfill, reportRejected);
alwaysFulfilledPromise.then(reportFulfill, reportRejected);
alwaysFulfilledPromise.then(reportFulfill, reportRejected);
alwaysFulfilledPromise.then(reportFulfill, reportRejected);
