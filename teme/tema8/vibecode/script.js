class AimGame {
  constructor() {
    this.level = 1;
    this.lives = 3;
    this.gridSize = 2;
    this.nextValue = 1;
    this.timeLeft = 35;
    this.timerId = null;

    this.correctClicksCount = 0;
    this.gameStartTime = Date.now();
    this.clickHistory = [];
    this.peakAPM = 0;

    this.levelColors = [
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
      overlay: document.getElementById('overlay'),
      peak: document.getElementById('peak-apm'),
      avg: document.getElementById('avg-apm'),
      fLevel: document.getElementById('final-level'),
      fTime: document.getElementById('time-spent'),
    };

    this.init();
    this.startAPMEngine();
  }

  init() {
    this.nextValue = 1;
    this.updateTheme();
    this.els.level.textContent = this.level;
    this.els.lives.textContent = '❤️'.repeat(this.lives);
    this.els.timer.textContent = this.timeLeft;

    this.renderBoard();
    this.applyTrainingHighlight();
    this.startClock();
  }

  updateTheme() {
    const index = (this.level - 1) % this.levelColors.length;
    document.documentElement.style.setProperty(
      '--primary-accent',
      this.levelColors[index],
    );
  }

  startAPMEngine() {
    setInterval(() => {
      const now = Date.now();
      this.clickHistory = this.clickHistory.filter((t) => now - t < 5000);
      const currentAPM = Math.round((this.clickHistory.length / 5) * 60);

      this.els.apm.textContent = currentAPM;
      this.els.apm.className = '';
      if (currentAPM < 100) this.els.apm.classList.add('apm-low');
      else if (currentAPM < 180) this.els.apm.classList.add('apm-med');
      else if (currentAPM < 300) this.els.apm.classList.add('apm-high');
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
      this.clickHistory.push(Date.now());
      this.correctClicksCount++;
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
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

    const levelBonus = Math.floor(5 + (this.level - 1) / 3);
    this.timeLeft += levelBonus;

    setTimeout(() => {
      this.level++;
      this.gridSize++;
      this.init();
    }, 600);
  }

  formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  gameOver() {
    clearInterval(this.timerId);
    const sessionSecs = Math.round((Date.now() - this.gameStartTime) / 1000);
    const avgAPM = Math.round(
      this.correctClicksCount / (sessionSecs / 60) || 0,
    );

    this.els.peak.textContent = this.peakAPM;
    this.els.avg.textContent = avgAPM;
    this.els.fLevel.textContent = this.level;
    this.els.fTime.textContent = this.formatTime(sessionSecs);
    this.els.overlay.classList.remove('hidden');
  }
}

window.onload = () => {
  const game = new AimGame();
  document.getElementById('training-mode').onchange = () =>
    game.applyTrainingHighlight();
};
