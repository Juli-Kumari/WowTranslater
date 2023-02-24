var inputText = document.querySelector("#text-box");
var button = document.querySelector("#btn");
var outputText = document.querySelector(".box");

// API
var serverUrl = "https://api.funtranslations.com/translate/wow.json";

function url(text) {
  var urlLink = serverUrl + "?text=" + text; // return https://api.funtranslations.com/translate/wow.json?text=how are you?
  return urlLink;
}

function errorHandling(e) {
  alert("Server down ......... Please wait for sometime");
  console.log("error = " + e);
}

// fetch(url).then(response => response.json()).then(json => console.log(json.error.message))

function eventHandling() {
  var inputValue = inputText.value;

  fetch(url(inputValue))
    .then((response) => response.json())
    .then((jsonValue) => {
      var outputValue = jsonValue.contents.translated;
      outputText.innerText = outputValue;
    })
    .catch(errorHandling);
}

button.addEventListener("click", eventHandling);
