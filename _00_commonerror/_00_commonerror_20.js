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


function ajaxLoad(url) {
  return new Promise(
    function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", url, true);
      xhr.onload = () => {resolve(xhr.responseText)};
      xhr.onerror = () => reject({ stat: xhr.statusText });
      xhr.send();
    }
  );
}

function doSomethingMuchLater() {
  console.log(">", myLoadedData);
}

// load the file content
var myLoadedData;
ajaxLoad("example.json")
  .then( parseIt )
  .then( storeIt );

// set a timer so it's loaded ages before
// it is needed
setTimeout( doSomethingMuchLater, 3000);
