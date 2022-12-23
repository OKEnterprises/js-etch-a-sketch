function createGrid(container, rows) {
    let size = rows * rows;
    for (let i = 0; i < size; i++) {
        let content = document.createElement('div');
        content.classList.add('square-div');   
        container.appendChild(content);
    }
}

function clearGrid(container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function newGrid(container) {
    let rows = prompt('How many squares per side?');
    if (rows > 100) return 'Enter a number 100 or less';
    clearGrid(container);
    createGrid(container, rows);
}

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    let content = document.createElement('div');
    content.classList.add('square-div');   
    container.appendChild(content);
}

const btn = document.querySelector('#new-grid')
btn.addEventListener('click', newGrid(container));