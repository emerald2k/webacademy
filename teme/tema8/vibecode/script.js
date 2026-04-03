class SpeedGame {
  constructor() {
    this.level = 1;
    this.lives = 3;
    this.nextValue = 1;
    this.gridSize = 2;
    this.timeLeft = 0;
    this.timerId = null;

    this.els = {
      grid: document.getElementById('game-grid'),
      level: document.getElementById('level-display'),
      timer: document.getElementById('timer-display'),
      lives: document.getElementById('lives-display'),
      overlay: document.getElementById('overlay'),
      overlayText: document.getElementById('overlay-text'),
    };

    this.init();
  }

  init() {
    this.nextValue = 1;
    this.els.level.textContent = this.level;
    this.els.lives.textContent = '❤️'.repeat(this.lives);

    // Timer Logic: Level 1 starts at 30, drops by 3 each level (min 5)
    this.timeLeft = Math.max(30 - (this.level - 1) * 3, 5);
    this.els.timer.textContent = this.timeLeft;

    this.createBoard();
    this.startClock();
  }

  startClock() {
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.els.timer.textContent = this.timeLeft;
      if (this.timeLeft <= 0) this.stopGame('TIME EXPIRED');
    }, 1000);
  }

  createBoard() {
    const total = this.gridSize * this.gridSize;
    const vals = Array.from({ length: total }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    );

    this.els.grid.innerHTML = '';
    this.els.grid.classList.remove('level-transition');

    for (let r = 0; r < this.gridSize; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < this.gridSize; c++) {
        const td = document.createElement('td');
        const num = vals[r * this.gridSize + c];
        td.textContent = num;
        td.onclick = () => this.checkClick(td, num);
        tr.appendChild(td);
      }
      this.els.grid.appendChild(tr);
    }
  }

  checkClick(cell, val) {
    if (cell.classList.contains('correct')) return;

    if (val === this.nextValue) {
      cell.classList.add('correct');
      this.nextValue++;

      if (this.nextValue > this.gridSize * this.gridSize) {
        this.levelUp();
      }
    } else {
      this.lives--;
      this.els.lives.textContent = '❤️'.repeat(this.lives);
      this.els.grid.classList.add('shake');
      setTimeout(() => this.els.grid.classList.remove('shake'), 400);

      if (this.lives <= 0) this.stopGame('NO LIVES LEFT');
    }
  }

  levelUp() {
    clearInterval(this.timerId);
    confetti({ particleCount: 120, spread: 60, origin: { y: 0.7 } });

    this.els.grid.classList.add('level-transition');

    setTimeout(() => {
      this.level++;
      this.gridSize++;
      this.init();
    }, 800);
  }

  stopGame(reason) {
    clearInterval(this.timerId);
    this.els.overlayText.textContent = reason;
    this.els.overlay.classList.remove('hidden');
  }
}

window.onload = () => new SpeedGame();
