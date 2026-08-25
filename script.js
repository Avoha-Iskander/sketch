// Fonction CreateGrid //

function createGrid() {
for (let i=0; i < 16; i++) {
    const container = document.querySelector(".container"); 
const square = document.createElement("div");
square.id = "square" + i;
container.append(square);}}

createGrid();