let userInput = document.getElementById('userInput').value

function makeCell(typeOfGrid) {
    let sizeInput = document.getElementById('userInput').value
    for (var i = 0; i < sizeInput * sizeInput; i++) {
        document.getElementById('wrapper'); //identifies parent div. div is made a flexbox by css rules
        let cell = document.createElement('div');
        cell.style.height = (1 / sizeInput * 600) + 'px';
        cell.style.width = (1 / sizeInput * 700) + 'px'; // makes the size of cells proportional to wrapper size - margin
        cell.className = 'cells'
        cell.style.backgroundColor = 'black';
        window[typeOfGrid](cell);;
        wrapper.appendChild(cell)
    }
}

function clearCells() {
    let wrapper = document.getElementById('wrapper');
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)
    }
}

function reset() {
	let typeOfGrid = document.getElementById('gridTypes').value;
    clearCells()
    makeCell(typeOfGrid)
}

function gradientGrid(cell) {
    cell.style.opacity = 0.1
    cell.addEventListener('mouseover', function() { //adds the event listeners to cells individually got to be a better way
        darken(cell)
    })
}

function colorGrid(cell) {
    cell.style.backgroundColor = 'white';
    cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = getRandomColor()
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function simpleGrid(cell) {
    cell.style.backgroundColor = 'white';
    cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = 'black'
    })
}

function alternatingGrid(cell) {
    cell.style.backgroundColor = 'white'
    cell.addEventListener('mouseover', function() {
        if (cell.style.backgroundColor == 'white') {
            cell.style.backgroundColor = 'black'
        } else {
            cell.style.backgroundColor = 'white'
        }
    })
}

function darken(cell) {
    if (cell.style.opacity < 1) {
        cell.style.opacity = parseFloat(cell.style.opacity) + 0.1 //functioning as intended
    }
}
reset(gradientGrid)