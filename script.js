const drawBoard = document.querySelector('.drawboard');
const resetButton = document.querySelector('#changeResolution');

resetButton.addEventListener('click',() => {
  drawBoard.innerHTML = ''
  let resolution = prompt('What resolution?', '16'); //prompt returns all values as strings 
  parseInt(resolution);
  if(resolution > 99) {
    alert('Less than 100 px!')
    return;
  } 
  makeRows(resolution, resolution);
  addTrace();
})

function makeRows(rows, cols) {
    drawBoard.style.setProperty('--grid-rows', rows);
    drawBoard.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      drawBoard.appendChild(cell).className = "grid-item";
    };
  };

function addTrace() {
  document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseover',() => {
      cell.className = 'trace';
    });
  });  
};


  