/**
 * This is a function that accepts two parameters
 * fulfill and reject.  fulfill is always called.
 * reject is never called.
 */
function randomPassFail(fulfill, reject) {
  let decision = Math.random() > 0.5;
  if (decision) {
    fulfill("🏆");
  } else {
    reject(new Error("💥"));
  }
}

function reportFulfill(x) {
  console.log("Fulfilled", x);
}

function reportRejected(x) {
  console.log("Rejected", x.message);
}

let mypromise = new Promise(randomPassFail);

mypromise.then(reportFulfill, reportRejected);
