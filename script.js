const drawBoard = document.querySelector('.drawboard');
const changeResolutionBtn = document.querySelector('#changeResolution');
const resetBtn = document.querySelector('#reset');

changeResolutionBtn.addEventListener('click',() => {
  drawBoard.innerHTML = ''
  let resolution = prompt('What resolution?', '16'); 
  parseInt(resolution); //resolution is a interger, valueof returns int
  if(resolution > 99) {
    alert('Less than 100 px!')
    return;
  } 
  makeRows(resolution, resolution);
  addTrace();
});

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
      cell.classList.add('trace');
    });
  });  
};

resetBtn.addEventListener('click',() => {
  document.querySelectorAll('.trace').forEach(element => {
    element.classList.remove('trace');
  });
  return;
})

  