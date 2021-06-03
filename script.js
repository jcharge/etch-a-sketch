

const gridDiv = document.querySelector('#grid-div');


// a function that makes a 16x16 grid
function makeGrid(gridSize) {
    removeCells();
    document.getElementById('grid-div').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-div').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridDiv.append(gridCell);
    // hover effect on gridCell to make it change color upon hovering over it
    gridCell.addEventListener('mouseover', function(e) {
        gridCell.classList.add('new-color');
    });
    };

}

// reset button that allows user input of grid size when pressed

const resetBtn = document.querySelector('#reset-button');

resetBtn.addEventListener('click', function(e) {   
    resetFunction();
})

function resetFunction() {
    let newSize = prompt('How big do you want your grid between 1-64: ')
    while (newSize < 1 || newSize > 64) {
        newSize = prompt('Pick a number between 1-64')
    }
    makeGrid(newSize);
}

// function to actually remove all cells inside of the grid
function removeCells () {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild)
    }
}


// default 16x16 grid on start-up
makeGrid(16);



