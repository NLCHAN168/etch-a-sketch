let size = 16;
const container = document.createElement("div");
container.setAttribute("id", "canvas");
document.body.appendChild(container);
function createCanvas() {
  let count = 0;
  for (let j = 0; j < size; j++) {
    let divRow = document.createElement("div");
    divRow.setAttribute("class", "row");
    for (let i = 0; i < size; i++) {
      let newDiv = document.createElement("div");
      newDiv.className = "r";
      divRow.appendChild(newDiv);
      container.appendChild(divRow);
    }
  }
}

createCanvas();
addColors();

function addColors() {
  const grids = document.querySelectorAll(".r");
  grids.forEach((grid) =>
    grid.addEventListener(
      "mouseover",
      () => (grid.style.backgroundColor = "black")
    )
  );
}
