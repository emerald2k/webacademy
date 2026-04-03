function drawTable(rows, cols) {
  const wrapper = document.getElementById('container');
  let table = document.createElement('div');

  // generate a matrix of random numbers between 1 and rows*cols without duplicates
  const values = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      do {
        randomValue = Math.floor(Math.random() * (rows * cols)) + 1;
      } while (values.includes(randomValue));
      values.push(randomValue);
    }
  }

  // generate the table
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement('span');
      cell.classList.add('cell', 'unselected');
      cell.textContent = values[i * cols + j];
      // cell.textContent = `${i},${j}`;
      cell.addEventListener('click', cellClickHandler);
      table.appendChild(cell);
    }
    // move to the next line after each row
    table.appendChild(document.createElement('br'));
  }
  wrapper.appendChild(table);
  // overwrite the table with the new one
  if (wrapper.children.length > 1) {
    wrapper.replaceChild(table, wrapper.children[0]);
  }
}

// Cell click handler to log the value of the cell and add a class to change its background color
function cellClickHandler(event) {
  console.log(nextStep);
  console.log(event.target.textContent);
  if (parseInt(event.target.textContent) === nextStep) {
    nextStep++;
    event.target.classList.add('selected');
    if (nextStep > cols * rows) {
      drawTable(++rows, ++cols);
      nextStep = 1;
    }
  } else {
    lifes--;
    if (lifes === 0) {
      alert('Game over!');
    } else {
      alert(`Wrong cell! You have ${lifes} lifes left.`);
    }
  }
}

let nextStep = 1;
let cols = 2;
let rows = 2;
let lifes = 3;
drawTable(2, 2);
