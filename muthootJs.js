
let formContainer = document.getElementById("formContainer");
let goldHeading = document.getElementById("goldHeading");


formContainer.style.backgroundColor = "#990000";


goldHeading.style.color = "white";
goldHeading.style.fontFamily = "sans-serif";
goldHeading.style.fontWeight = "900";

//REST API calls

let options = {
    method: "GET"
};

fetch("https://dog.ceo/api/breeds/list/all", options)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
    });
  