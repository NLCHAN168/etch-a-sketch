let size = 16;
const container = document.createElement("div");
container.setAttribute("id", "canvas");
document.body.appendChild(container);
var toAdd = document.createDocumentFragment();
function createCanvas() {
  let count = 0;
  for (var i = 0; i < size; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = "r" + i;
    toAdd.appendChild(newDiv);
  }
  document.appendChild(toAdd);
}
/*let square1 = document.createElement("div");
let square2 = document.createElement("div");
let square3 = document.createElement("div");
let square4 = document.createElement("div");
let square5 = document.createElement("div");
let square6 = document.createElement("div");
let square7 = document.createElement("div");
let square8 = document.createElement("div");
let square9 = document.createElement("div");
let square10 = document.createElement("div");
let square11 = document.createElement("div");
let square12 = document.createElement("div");
let square13 = document.createElement("div");
let square14 = document.createElement("div");
let square15 = document.createElement("div");
let square16 = document.createElement("div");
document.body.appendChild(square1);
document.body.appendChild(square2);
document.body.appendChild(square3);
document.body.appendChild(square4);
document.body.appendChild(square5);
document.body.appendChild(square6);
document.body.appendChild(square7);
document.body.appendChild(square8);
document.body.appendChild(square9);
document.body.appendChild(square10);
document.body.appendChild(square11);
document.body.appendChild(square12);
document.body.appendChild(square13);
document.body.appendChild(square14);
document.body.appendChild(square15);
document.body.appendChild(square16);*/
