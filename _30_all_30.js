let count = 20;
let pass = 0,
  fail = 0;
let promises = [];

function randomPassFail(fulfill, reject) {
  let decision = Math.random() > 0.5;
  if (decision) {
    fulfill("🏆");
  } else {
    reject(new Error("💥"));
  }
}


for (let i = 0; i < count; i++) {
  promises.push(new Promise(randomPassFail));
}

function passed(x) {
  pass++;
}

function failed(x) {
  fail++;
}

function reportPassFail(x) {
  console.log(x.message ? x.message : x);
}

function report() {
  console.log("In order of completion...")
  promises.forEach((p) => p.then(reportPassFail, reportPassFail));
}

function countResults() {
  promises.forEach((p) => p.then(passed, failed));
}

function reportpasses() {
  console.log(pass);
  console.log(fail);
}

report();
Promise
  .all(promises)
  .then(countResults, countResults)
  .then(reportpasses);
