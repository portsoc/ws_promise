/**
 * This is a function that accepts two parameters
 * fulfill and reject.  fulfill is always called.
 * reject is never called.
 */
function randomPassFail(fulfill, reject) {
  setTimeout(() => {
      let decision = Math.random() > 0.5;
      if (decision) {
        fulfill("🏆");
      } else {
        reject(new Error("💥"));
      }
    },
    2500
  );
}

function reportFulfill(x) {
  console.log("Fulfilled", x);
}

function reportRejected(x) {
  console.log("Rejected", x.message);
}

let mypromise = new Promise(randomPassFail);

mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);
mypromise.then(reportFulfill, reportRejected);

console.log("ok")
