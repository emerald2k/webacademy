class SequentialGame {
  constructor() {
    this.level = 1;
    this.nextExpected = 1;
    this.gridSize = 2; // Starts at 2x2

    this.gridElement = document.getElementById('game-grid');
    this.levelDisplay = document.getElementById('level-display');
    this.nextDisplay = document.getElementById('next-number');

    this.initLevel();
  }

  initLevel() {
    this.nextExpected = 1;
    this.updateUI();
    this.renderGrid();
  }

  updateUI() {
    this.levelDisplay.textContent = this.level;
    this.nextDisplay.textContent = this.nextExpected;
  }

  renderGrid() {
    const totalCells = this.gridSize * this.gridSize;
    const numbers = Array.from({ length: totalCells }, (_, i) => i + 1);
    this.shuffle(numbers);

    this.gridElement.innerHTML = '';

    for (let r = 0; r < this.gridSize; r++) {
      const row = document.createElement('tr');
      for (let c = 0; c < this.gridSize; c++) {
        const cell = document.createElement('td');
        const val = numbers[r * this.gridSize + c];
        cell.textContent = val;
        cell.addEventListener('click', () => this.handleCellClick(cell, val));
        row.appendChild(cell);
      }
      this.gridElement.appendChild(row);
    }
  }

  handleCellClick(cell, value) {
    if (value === this.nextExpected) {
      cell.classList.add('correct');
      this.nextExpected++;

      const totalCells = this.gridSize * this.gridSize;
      if (this.nextExpected > totalCells) {
        // Level Cleared
        setTimeout(() => this.nextLevel(), 300);
      } else {
        this.updateUI();
      }
    }
  }

  nextLevel() {
    this.level++;
    this.gridSize++;
    this.initLevel();
  }

  // Fisher-Yates Shuffle Algorithm
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

// Instantiate the game when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SequentialGame();
});
