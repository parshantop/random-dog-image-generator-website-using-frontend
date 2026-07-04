
document.querySelector("button").addEventListener("click", function() {

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'}




fetch("https://pro-api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.json())
  .then(result => {
    let data = result[0].url;
    console.log(data);
    let img = document.createElement("img");
document.querySelector("img");

img.setAttribute("src", data);
img.style.boxSizing = "border-box";
img.style.position = "absolute";
img.style.marginLeft = "320px";
img.style.width = "600px";
img.style.height="400px";


let body=document.querySelector("body");
body.append(img)


  })
  .catch(error => console.log('error', error));  });    


// let img=  document.querySelector("img");
// img.setAttribute("src", data);






