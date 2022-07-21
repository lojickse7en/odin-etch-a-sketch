//create container
function createContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
}
createContainer();

//for loop created to create 16x16 boxes
let numOfBoxes = 16 * 16;
let number = 1;

for (i = 0; i < numOfBoxes; i++) {
  const container = document.querySelector('.container');
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');
  newDiv.textContent = number++;
  container.appendChild(newDiv);
}

const box = document.querySelectorAll('.box');
function highlight() {
  box.forEach((box) => {
    box.addEventListener(
      'mouseover',
      () => {
        box.setAttribute('style', 'background-color: greenyellow;');
        setTimeout(() => {
          // const box = document.querySelectorAll('.box');
          box.removeAttribute('style');
        }, 500);
      }
      // false
    );
  });
}
highlight();

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
