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
    container.innerHTML = '';

    const boxSize = Math.floor(550 / size);
    
    for (let r = 0; r < size; r++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("box");

        gridBox.style.width = `${boxSize}px`;
        gridBox.style.height = `${boxSize}px`;
        
        gridBox.style.flexDirection = 'row';

        gridBox.addEventListener("mouseover", function() {
            gridBox.style.backgroundColor = "black";
        });
        
        container.appendChild(gridBox);

        for (let c = 0; c < size; c++) {
            const gridBox = document.createElement("div");
        gridBox.classList.add("box");

        gridBox.style.width = `${boxSize}px`;
        gridBox.style.height = `${boxSize}px`;
        gridBox.style.flexDirection = 'column';

        gridBox.addEventListener("mouseover", function() {
            gridBox.style.backgroundColor = "black";
        });
        container.appendChild(gridBox);
        }
        
    }

    // for (let i = 0; i < size; i++) {
    //     const gridBox = document.createElement("div");
    //     gridBox.classList.add("box");

    //     gridBox.style.width = `${boxSize}px`;
    //     gridBox.style.height = `${boxSize}px`;
        
    //     gridBox.addEventListener("mouseover", function() {
    //         gridBox.style.backgroundColor = "black";
    //     });
        
    //     container.appendChild(gridBox);
    // }
    
}


updateGrid(gridSize);