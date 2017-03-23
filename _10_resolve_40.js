// the value of a promise can
// be used after it has been resolved
let mypromise = Promise.resolve("for example");

mypromise.then(console.log);
mypromise.then(console.log);
mypromise.then(console.log);
mypromise.then(console.log);
