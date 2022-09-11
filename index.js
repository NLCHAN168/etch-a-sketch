let size = 16;
const container = document.createElement("div");
container.setAttribute("id", "canvas");
document.body.appendChild(container);
function createCanvas() {
  let count = 0;
  for (var j = 0; j < size; j++) {
    var divRow = document.createElement("div");
    divRow.setAttribute("id", "row");
    for (var i = 0; i < size; i++) {
      var newDiv = document.createElement("div");
      newDiv.id = "r";
      newDiv.addEventListener("onmouseover", changeColor());
      /*      newDiv.addEventListener("onmouseover", () => {
        document.getElementById("r").style.backgroundColor = "black";
      });
      newDiv.addEventListener("onmouseleave", () => {
        document.getElementById("r").style.backgroundColor = "white";
      });*/
      divRow.appendChild(newDiv);
      container.appendChild(divRow);
    }
  }
}

function changeColor() {
  document.getElementById("r").style.backgroundColor = "black";
}
createCanvas();
