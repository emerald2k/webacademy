class ProTrainer {
  constructor() {
    this.level = 1;
    this.lives = 3;
    this.gridSize = 2;
    this.nextValue = 1;
    this.timeLeft = 0;
    this.timerId = null;

    this.allCorrectClicks = 0;
    this.startTime = Date.now();
    this.clickHistory = [];
    this.peakAPM = 0;

    // Level Colors: Red, Green, Blue, Gold, Purple, Cyan...
    this.colors = [
      '#ff3b3b',
      '#4cd137',
      '#00d2ff',
      '#ffcc00',
      '#a55eea',
      '#2bcbba',
      '#eb3b5a',
    ];

    this.els = {
      grid: document.getElementById('game-grid'),
      level: document.getElementById('level-display'),
      timer: document.getElementById('timer-display'),
      lives: document.getElementById('lives-display'),
      apm: document.getElementById('apm-display'),
      training: document.getElementById('training-mode'),
      peak: document.getElementById('peak-apm'),
      avg: document.getElementById('avg-apm'),
      overlay: document.getElementById('overlay'),
    };

    this.init();
    this.startAPMEngine();
  }

  init() {
    this.nextValue = 1;
    this.updateTheme();
    this.els.level.textContent = this.level;
    this.els.lives.textContent = '❤️'.repeat(this.lives);
    this.timeLeft = Math.max(35 - this.level * 2, 5);
    this.els.timer.textContent = this.timeLeft;

    this.renderBoard();
    this.applyTrainingHighlight();
    this.startClock();
  }

  updateTheme() {
    // Cycle through colors based on level
    const colorIndex = (this.level - 1) % this.colors.length;
    const newColor = this.colors[colorIndex];
    document.documentElement.style.setProperty('--primary-accent', newColor);
  }

  startAPMEngine() {
    setInterval(() => {
      const now = Date.now();
      this.clickHistory = this.clickHistory.filter((t) => now - t < 5000);
      const currentAPM = Math.round((this.clickHistory.length / 5) * 60);

      this.els.apm.textContent = currentAPM;
      this.els.apm.className = '';
      if (currentAPM < 80) this.els.apm.classList.add('apm-low');
      else if (currentAPM < 150) this.els.apm.classList.add('apm-med');
      else if (currentAPM < 250) this.els.apm.classList.add('apm-high');
      else this.els.apm.classList.add('apm-pro');

      if (currentAPM > this.peakAPM) this.peakAPM = currentAPM;
    }, 100);
  }

  startClock() {
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.els.timer.textContent = this.timeLeft;
      if (this.timeLeft <= 0) this.gameOver();
    }, 1000);
  }

  renderBoard() {
    const total = this.gridSize * this.gridSize;
    const nums = Array.from({ length: total }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    );
    this.els.grid.innerHTML = '';

    for (let r = 0; r < this.gridSize; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < this.gridSize; c++) {
        const td = document.createElement('td');
        td.textContent = nums[r * this.gridSize + c];
        td.dataset.val = nums[r * this.gridSize + c];
        td.onmousedown = () => this.handleHit(td, parseInt(td.dataset.val));
        tr.appendChild(td);
      }
      this.els.grid.appendChild(tr);
    }
  }

  applyTrainingHighlight() {
    // Remove old highlights
    document
      .querySelectorAll('.training-highlight')
      .forEach((el) => el.classList.remove('training-highlight'));

    if (this.els.training.checked) {
      const target = Array.from(document.querySelectorAll('td')).find(
        (el) => parseInt(el.dataset.val) === this.nextValue,
      );
      if (target) target.classList.add('training-highlight');
    }
  }

  handleHit(el, val) {
    if (el.classList.contains('correct')) return;

    if (val === this.nextValue) {
      el.classList.add('correct');
      el.classList.remove('training-highlight');
      this.clickHistory.push(Date.now());
      this.allCorrectClicks++;
      this.nextValue++;

      if (this.nextValue > this.gridSize * this.gridSize) {
        this.nextLevel();
      } else {
        this.applyTrainingHighlight();
      }
    } else {
      this.lives--;
      this.els.lives.textContent = '❤️'.repeat(this.lives);
      this.els.grid.classList.add('shake');
      setTimeout(() => this.els.grid.classList.remove('shake'), 200);
      if (this.lives <= 0) this.gameOver();
    }
  }

  nextLevel() {
    clearInterval(this.timerId);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      this.level++;
      this.gridSize++;
      this.init();
    }, 600);
  }

  gameOver() {
    clearInterval(this.timerId);
    const totalMins = (Date.now() - this.startTime) / 60000;
    const avgAPM = Math.round(this.allCorrectClicks / totalMins);

    this.els.peak.textContent = this.peakAPM;
    this.els.avg.textContent = avgAPM;
    this.els.overlay.classList.remove('hidden');
  }
}

window.onload = () => {
  const game = new ProTrainer();
  // Re-apply highlight if player toggles mode during play
  document.getElementById('training-mode').onchange = () =>
    game.applyTrainingHighlight();
};
