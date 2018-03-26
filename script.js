let userInput = document.getElementById('userInput').value
let makeCell = function(sizeInput){
	for (var i = 0; i < sizeInput * sizeInput; i++) {
		document.getElementById('wrapper');
		let cellHeight =(1 / sizeInput * 600) - 2 + 'px';
		let cellWidth = (1 / sizeInput * 700) - 2 + 'px';
		let cell = document.createElement('div');
		cell.style.width = cellWidth;
		cell.style.height = cellHeight;
		cell.style.margin = '1px'
		cell.style.backgroundColor = 'black' 
		wrapper.appendChild(cell)
		
	}
}
