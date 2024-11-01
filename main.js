const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeButton");

let gridSize = 16;

sizeButton.addEventListener("click", function(){
    let gridSize = parseInt(prompt("Enter the size of grid it should be between 16 - 100:"));
    if(gridSize < 16 || gridSize > 100){
        alert("Size should be between 16 - 100. Try again");
    }
    else{
        console.log(gridSize);
        updateGrid(gridSize);
    }
});

function updateGrid(size) {
    
    for (let i = 0; i < size * size; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("box");
        
        gridBox.addEventListener("mouseover", function() {
            gridBox.style.backgroundColor = "black";
        });
        
        container.appendChild(gridBox);
    }
    
}


updateGrid(gridSize);