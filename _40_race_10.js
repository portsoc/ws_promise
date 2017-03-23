function conclude() {
    console.log("finished")
}

function randomPause(fulfill, reject) {
  let pause = Math.random() * 1000;
  setTimeout(() => fulfill( pause ), pause);
}

let p1 = new Promise(randomPause);
let p2 = new Promise(randomPause);
let p3 = new Promise(randomPause);

Promise.race([p1,p2,p3]).then(conclude)

p1.then(console.log);
p2.then(console.log);
p3.then(console.log);
