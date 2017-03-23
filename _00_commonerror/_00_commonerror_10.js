
function ajaxLoad(url) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.addEventListener( "load",
    function(e) {
      var parsed = JSON.parse(e.target.responseText);
      console.log("Load ok!");
      console.log(e.target.responseText);
      console.log(parsed);
      return parsed;
    }
  );
  xhr.send();
}

function doSomethingMuchLater() {
  console.log(myLoadedData);
}

// load the file content
var myLoadedData = ajaxLoad("example.json");

// set a timer so it's loaded ages before
// it is needed
setTimeout( doSomethingMuchLater, 3000);
