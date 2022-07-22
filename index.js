//Variable Declarations
const container = document.createElement('div');

//create container
container.classList.add('container');
document.body.appendChild(container);

//for loop used to create initial 16x16 boxes (in the future, try using forEach )
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('box');
    container.appendChild(gridItem);
  }
}
createGrid(16);

function changeColor() {
  
}

//highlight individual boxes on hover
const box = document.querySelectorAll('.box');
function highlight() {
  box.forEach((box) => {
    box.addEventListener('mouseover', function () {
      box.setAttribute('style', 'background-color: greenyellow;');
    });
  });
}
highlight();

//when user clicks button, prompts question
const button = document.querySelector('button');

button.addEventListener('click', function () {
  gridSize = prompt(
    'How may squares would you like on each side of your grid?'
  );
  if (gridSize < 100) {
    let num = document.querySelector('.num');
    num.textContent = `You have selected a ${gridSize} x ${gridSize} grid size`;
    createGrid(gridSize);
    const newBox = document.querySelectorAll('.box');
    function newHighlight() {
      newBox.forEach((newBox) => {
        newBox.addEventListener('mouseover', function () {
          newBox.setAttribute('style', 'background-color: greenyellow;');
        });
      });
    }
    newHighlight();
  } else {
    alert('Try again');
  }
});
