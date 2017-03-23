var myLoadedData;

function doSomethingMuchLater() {
  console.log("Much Later...", myLoadedData);
}

// load the file content
fetch("example.json").then(
  (r) => myLoadedData = r.json()
)

// set a timer so it's loaded ages before
// it is needed
setTimeout( doSomethingMuchLater, 3000);
