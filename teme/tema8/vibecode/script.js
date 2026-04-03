class EliteTrainer {
  constructor() {
    this.level = 1;
    this.lives = 3;
    this.gridSize = 2;
    this.nextValue = 1;
    this.timeLeft = 0;
    this.timerId = null;

    // APM & Analytics
    this.allCorrectClicks = 0;
    this.startTime = Date.now();
    this.clickHistory = [];
    this.peakAPM = 0;

    // Hint Logic
    this.hintTimeout = null;

    this.els = {
      grid: document.getElementById('game-grid'),
      level: document.getElementById('level-display'),
      timer: document.getElementById('timer-display'),
      lives: document.getElementById('lives-display'),
      apm: document.getElementById('apm-display'),
      overlay: document.getElementById('overlay'),
      peakDisplay: document.getElementById('peak-apm'),
      avgDisplay: document.getElementById('avg-apm'),
    };

    this.init();
    this.startEngine();
  }

  init() {
    this.nextValue = 1;
    this.els.level.textContent = this.level;
    this.els.lives.textContent = '❤️'.repeat(this.lives);
    this.timeLeft = Math.max(30 - (this.level - 1) * 2, 5);
    this.els.timer.textContent = this.timeLeft;

    this.renderBoard();
    this.resetHintTimer();
    this.startClock();
  }

  startEngine() {
    // High-frequency APM update (10fps)
    setInterval(() => {
      const now = Date.now();
      this.clickHistory = this.clickHistory.filter((t) => now - t < 5000);
      const currentAPM = Math.round((this.clickHistory.length / 5) * 60);

      this.updateAPMUI(currentAPM);
      if (currentAPM > this.peakAPM) this.peakAPM = currentAPM;
    }, 100);
  }

  updateAPMUI(apm) {
    this.els.apm.textContent = apm;
    this.els.apm.className = ''; // Reset
    if (apm < 60) this.els.apm.classList.add('apm-low');
    else if (apm < 120) this.els.apm.classList.add('apm-med');
    else if (apm < 200) this.els.apm.classList.add('apm-high');
    else this.els.apm.classList.add('apm-blue');
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
        const val = nums[r * this.gridSize + c];
        td.textContent = val;
        td.dataset.val = val;
        td.onmousedown = () => this.handleHit(td, val);
        tr.appendChild(td);
      }
      this.els.grid.appendChild(tr);
    }
  }

  resetHintTimer() {
    clearTimeout(this.hintTimeout);
    // Remove existing hints
    document
      .querySelectorAll('.hint-pulse')
      .forEach((el) => el.classList.remove('hint-pulse'));

    this.hintTimeout = setTimeout(() => {
      const target = Array.from(document.querySelectorAll('td')).find(
        (el) => parseInt(el.dataset.val) === this.nextValue,
      );
      if (target) target.classList.add('hint-pulse');
    }, 3000);
  }

  handleHit(el, val) {
    if (el.classList.contains('correct')) return;

    if (val === this.nextValue) {
      el.classList.add('correct');
      this.clickHistory.push(Date.now());
      this.allCorrectClicks++;
      this.nextValue++;
      this.resetHintTimer();

      if (this.nextValue > this.gridSize * this.gridSize) {
        this.nextLevel();
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
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      this.level++;
      this.gridSize++;
      this.init();
    }, 600);
  }

  gameOver() {
    clearInterval(this.timerId);
    clearTimeout(this.hintTimeout);

    // Calculate Average APM
    const totalMinutes = (Date.now() - this.startTime) / 60000;
    const avgAPM = Math.round(this.allCorrectClicks / totalMinutes);

    this.els.peakDisplay.textContent = this.peakAPM;
    this.els.avgDisplay.textContent = avgAPM;
    this.els.overlay.classList.remove('hidden');
  }
}

window.onload = () => new EliteTrainer();
