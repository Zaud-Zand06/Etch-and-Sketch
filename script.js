const drawBoard = document.querySelector('.drawboard');
const changeResolutionBtn = document.querySelector('#changeResolution');
const resetBtn = document.querySelector('#reset');
const sixteenPx = document.getElementById('16x16');
const thirtytwoPx = document.getElementById('32x32');
const sixtyfourPx = document.getElementById('64x64');
const onehundredPx = document.getElementById('128x128');

document.querySelectorAll("*").forEach((elem) => {
  elem.setAttribute('draggable', false)
  elem.addEventListener('dragstart', (event) => {
      event.preventDefault()
  })
})

let mouseDown = 0;
drawBoard.onmousedown = () => { 
  mouseDown++;
}
drawBoard.onmouseup = () => {
  mouseDown--;
}

sixteenPx.addEventListener('click',() => {
  drawBoard.innerHTML = '';
  makeRows(16, 16);
  addTrace();
});

thirtytwoPx.addEventListener('click',() => {
  drawBoard.innerHTML = '';
  makeRows(32, 32);
  addTrace();
});

sixtyfourPx.addEventListener('click',() => {
  drawBoard.innerHTML = '';
  makeRows(64, 64);
  addTrace();
});

onehundredPx.addEventListener('click',() => {
  drawBoard.innerHTML = '';
  makeRows(128, 128);
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
      if(mouseDown) {
        cell.classList.add('trace');
      }
    })})};

resetBtn.addEventListener('click',() => {
  document.querySelectorAll('.trace').forEach(element => {
    element.classList.remove('trace');
  });
  mouseDown = 0;
  return;
})

  