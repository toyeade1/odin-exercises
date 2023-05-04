function makegrid(rows) {
     let container = document.querySelector(".container")
     for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let x = 1; x <= rows; x++) {
            let grid = document.createElement("div");
            grid.classList.add("gridspace");
            row.appendChild(grid);
        }
        container.appendChild(row);
     }
}
makegrid(16);


let grids = document.querySelectorAll(".gridspace");


function hoverOn(e){
    this.classList.add("hover");
}

function hoverOff() {
    this.classList.remove("hover")
}

grids.forEach(function(grid) {
    grid.addEventListener("mouseover", hoverOn);
    // grid.addEventListener("mouseout", hoverOff);
})


function restart() {
    let gridNumber = prompt("How many grids would you like");
    let container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makegrid(gridNumber);
    let grids = document.querySelectorAll(".gridspace");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", hoverOn);
    })
}

let button = document.querySelector(".restart-game");
button.addEventListener("click", restart);