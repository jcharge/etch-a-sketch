

const gridDiv = document.querySelector('#grid-div');


// a function that makes a grid that can change colors
function makeDefaultGrid(gridSize) {
    removeCells();
    document.getElementById('grid-div').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-div').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridDiv.append(gridCell);
    // hover effect on gridCell to make it change color upon hovering over it
    gridCell.addEventListener('mouseover', function(e) {
        gridCell.classList.add('default-color');
    });
    };

}

// a function that makes a grid where the cells get progressively blacker
function makeBlackScaledGrid(gridSize) {
    removeCells();
    document.getElementById('grid-div').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-div').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
    const blackCell = document.createElement('div');
    blackCell.classList.add('black-cell');
    gridDiv.append(blackCell);
    // hover effect on gridCell to make it change color upon hovering over it
    let rgbNumber = 250;
    blackCell.addEventListener('mouseover', function(e) {
        
        if (rgbNumber > 0) {
            rgbNumber -= 25;
            blackCell.style.backgroundColor = `rgb(${rgbNumber}, ${rgbNumber}, ${rgbNumber})`;
        }
    });
    };

};

// a function that makes a grid where the cells turn a random color
function makeRainbowGrid(gridSize) {
    removeCells();
    document.getElementById('grid-div').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-div').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
    const rainbowCell = document.createElement('div');
    rainbowCell.classList.add('rainbow-cell');
    gridDiv.append(rainbowCell);
    // hover effect on gridCell to make it change color upon hovering over it
    rainbowCell.addEventListener('mouseover', function(e) {
        let rgbNumberOne = Math.floor(Math.random() * 255);
        let rgbNumberTwo = Math.floor(Math.random() * 255);
        let rgbNumberThree = Math.floor(Math.random() * 255);
        rainbowCell.style.backgroundColor = `rgb(${rgbNumberOne}, ${rgbNumberTwo}, ${rgbNumberThree})`;
        
    });
    };

};

// reset button that allows user input of grid size when pressed

const defaultBtn = document.querySelector('#default-button');

defaultBtn.addEventListener('click', function(e) {   
    resetFunction('default');
})

function resetFunction(color) {
    let newSize = prompt('How many squares per side do you want between 1-64: ')
    while (newSize < 1 || newSize > 64) {
        newSize = prompt('Pick a number between 1-64')
    }
    switch(color) {
        case 'default':
            makeDefaultGrid(newSize);
        break;
        case 'black-scale':
            makeBlackScaledGrid(newSize);
        break;
        case 'rainbow':
            makeRainbowGrid(newSize);
        break;
        default: makeDefaultGrid(newSize);
    }
}

// reset button for the black scaling grid

const blackScaleBtn = document.querySelector('#black-scale-button');

blackScaleBtn.addEventListener('click', function(e) {
    resetFunction('black-scale')
})

// reset button for the rainbow grid

const rainbowBtn = document.querySelector('#rainbow-button');

rainbowBtn.addEventListener('click', function(e) {
    resetFunction('rainbow');
})

// function to actually remove all cells inside of the grid
function removeCells () {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild)
    }
}


// default 16x16 grid on start-up
makeDefaultGrid(16);



