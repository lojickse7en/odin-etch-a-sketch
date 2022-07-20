//create container
function createContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
}
createContainer();

let numOfBoxes = 16 * 16;
let number = 1;

for (i = 0; i < numOfBoxes; i++) {
  const container = document.querySelector('.container');
  const newDiv = document.createElement('div');
  newDiv.textContent = number++;
  container.appendChild(newDiv);
}

// //use for loop to create (16x16) grid items
// let gridSquares = 16 * 16;
// let number = 1;

// let divArray = new Array();
// for (i = 0; i < gridSquares; i++) {
//   divArray[i] = document.createElement('div');
//   divArray[i].textContent = number++;
//   const parentElement = document.querySelector('.container');
//   parentElement.appendChild(divArray[i]);
// }
