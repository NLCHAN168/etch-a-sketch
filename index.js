var size = 16;
const grid = document.createElement("div");
const submit = document.createElement("button");
submit.textContent = "Refresh";
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("id", "size");
submit.addEventListener("click", () => {
  size = document.getElementById("size").value;
  container.innerHTML = "";
  createCanvas();
  addColors();
});
const container = document.createElement("div");
container.setAttribute("id", "canvas");
grid.appendChild(x);
grid.appendChild(submit);
document.body.appendChild(grid);
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
      () =>
        (grid.style.backgroundColor = `rgb(${1 + Math.random() * 255},
          ${1 + Math.random() * 255},
          ${1 + Math.random() * 255})`)
    )
  );
}
