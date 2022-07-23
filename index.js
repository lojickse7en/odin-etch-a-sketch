//variable Declarations
const container = document.createElement('div');
const num = document.querySelector('.num');
const button = document.querySelector('button');

//create container
container.classList.add('container');
document.body.appendChild(container);

//for loop used to create initial 16x16 boxes (in the future, try using forEach )
function createGrid(size) {
  num.textContent = `Your current grid dimensions are ${size} x ${size}`;
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => (box.style.backgroundColor = 'darkgrey'));
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('box');
    container.appendChild(gridItem);
  }
}
createGrid(16);

//highlight individual boxes on hover
function highlight() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => (box.style.backgroundColor = 'darkgrey'));
  boxes.forEach((box) => {
    box.addEventListener('mouseover', function () {
      box.style.backgroundColor = 'black';
    });
  });
}
highlight();

//when user clicks button, prompts question
button.addEventListener('click', function () {
  gridSize = prompt(
    'How may squares would you like on each side of your grid?'
  );
  newGrid();
});

//create a new grid based on user input
function newGrid() {
  if (gridSize < 100) {
    num.textContent = `You have selected a ${gridSize} x ${gridSize} grid size`;
    createGrid(gridSize);
    highlight();
  } else {
    alert('Try again, make sure your number is under 100');
    createGrid(16);
  }
}
