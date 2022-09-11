let size = 16;
const container = document.createElement("div");
container.setAttribute("id", "canvas");
document.body.appendChild(container);
var toAdd = document.createDocumentFragment();
function createCanvas() {
  let count = 0;
  for (var j = 0; j < size; j++) {
    var divRow = document.createElement("div");
    divRow.setAttribute("id", "row");
    for (var i = 0; i < size; i++) {
      var newDiv = document.createElement("div");
      newDiv.id = "r";
      toAdd.appendChild(newDiv);
      divRow.appendChild(toAdd);
      container.appendChild(divRow);
    }
  }
}
createCanvas();
