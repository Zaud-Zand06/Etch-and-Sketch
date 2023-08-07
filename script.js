const drawBoard = document.querySelector('.drawboard');

function makeRows(rows, cols) {
    drawBoard.style.setProperty('--grid-rows', rows);
    drawBoard.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      drawBoard.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);

  document.getElementById('grid-item').onmouseover = function() {
    this.className = 'trace'
  }
  