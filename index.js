const container = document.querySelector('#container');

function activateSquare(square) {
    square.classList.add('activated');
}

function createGrid(rows) {
    let size = rows * rows;
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < rows; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('square-div');
            pixel.addEventListener('mouseover', activateSquare(pixel)); 
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

createGrid(16);

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function newGrid(rows) {
    if (rows > 100) return 'Enter a number 100 or less';
    clearGrid();
    createGrid(rows);
}

function gridFromInput() {
    newGrid(prompt('How many squares per side?'));
}

const btn = document.querySelector('#new-grid')
btn.addEventListener('click', gridFromInput());
