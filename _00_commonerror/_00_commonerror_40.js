var myLoadedData;

function doSomethingMuchLater() {
  console.log("Much Later...", myLoadedData);
}

function extract(response) {
  return response.json();
}

function store(json) {
  myLoadedData = json;
}

// load the file content
fetch("example.json")
  .then( extract )
  .then( store )

// set a timer so it's loaded ages before
// it is needed
setTimeout( doSomethingMuchLater, 3000);
