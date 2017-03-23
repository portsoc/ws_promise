function parseIt(text) {
  console.log(text);
  var parsed = JSON.parse(text);
  console.log("Load ok!");
  console.log(parsed);
  return parsed;
}

function storeIt(text) {
  myLoadedData = text;
}

function extractText(response) {
  return response.text();
}


function doSomethingMuchLater() {
  console.log(">", myLoadedData);
}

// load the file content
var myLoadedData;
fetch("example.json")
  .then( extractText )
  .then( parseIt )
  .then( storeIt );

// set a timer so it's loaded ages before
// it is needed
setTimeout( doSomethingMuchLater, 3000);
