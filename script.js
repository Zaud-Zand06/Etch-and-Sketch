const drawBoard = document.querySelector('.drawboard');
const resetButton = document.querySelector('#changeResolution');

resetButton.addEventListener('click', function() {
  drawBoard.innerHTML = ''
  let resolution = prompt('What resolution?', '16');
  makeRows(resolution, resolution);
})

function makeRows(rows, cols) {
    drawBoard.style.setProperty('--grid-rows', rows);
    drawBoard.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      drawBoard.appendChild(cell).className = "grid-item";
    };
  };
  

  document.querySelectorAll('.grid-item').forEach(cell => {
      cell.addEventListener('mouseover',() => {
        cell.className = 'trace';
      });
    });

  