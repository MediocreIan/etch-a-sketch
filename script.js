let userInput = document.getElementById('userInput').value
let makeCell = function(sizeInput){   //currently handles entire javascript function needs to be split up
	for (var i = 0; i < sizeInput * sizeInput; i++) {
		document.getElementById('wrapper');  //identifies parent div. div is mad flexbox by css rules
		let cellHeight =(1 / sizeInput * 600) - 2 + 'px';
		let cellWidth = (1 / sizeInput * 700) - 2 + 'px'; // makes the size of cells proportional to wrapper size - margin
		let cell = document.createElement('div');  //the information for creating individual cells, sould be made its own function
		cell.style.width = cellWidth;  
		cell.style.height = cellHeight;
		cell.style.margin = '1px'
		cell.style.backgroundColor = 'black' 
		wrapper.appendChild(cell)
		
	}
}
 