//Create the container div
function createContainerDiv() {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
}
createContainerDiv();

//use for loop to create (16x16) grid items
let gridSquares = 16 * 16;
let number = 1;

let divArray = new Array();
for (i = 0; i < gridSquares; i++) {
  divArray[i] = document.createElement('div');
  divArray[i].textContent = `${number++}`;
  const parentElement = document.querySelector('.container');
  parentElement.appendChild(divArray[i]);
}
