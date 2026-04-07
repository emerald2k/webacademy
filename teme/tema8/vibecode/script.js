class AimEvolution {
  constructor() {
    this.mode = 'normal';
    this.level = 1;
    this.gridSize = 2;
    this.nextValue = 1;
    this.lives = 3;
    this.timeLeft = 35;
    this.hintBank = 0.0;
    this.tacticalEnergy = 50.0;
    this.timerId = null;
    this.clickHistory = [];
    this.peakAPM = 0;
    this.totalApmSum = 0;
    this.apmTicks = 0;
    this.isHintActive = false;

    this.els = {
      grid: document.getElementById('game-grid'),
      level: document.getElementById('level-display'),
      timer: document.getElementById('timer-display'),
      apm: document.getElementById('apm-display'),
      lives: document.getElementById('lives-display'),
      hintBank: document.getElementById('hint-bank'),
      hintFill: document.getElementById('hint-fill'),
      tactEnergy: document.getElementById('tactical-energy'),
      tactFill: document.getElementById('tactical-fill'),
      overlay: document.getElementById('overlay'),
    };
    this.setupKeys();
  }

  setupKeys() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.toggleHint(true);
      }
      if (e.code === 'KeyQ') this.usePathfinder();
      if (e.code === 'KeyW') this.useOverclock();
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') this.toggleHint(false);
    });
  }

  start(mode) {
    this.mode = mode;
    this.startTime = Date.now();
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('side-panel').classList.remove('hidden');
    document.getElementById('main-stage').classList.remove('hidden');
    this.initLevel();
    this.runLoop();
  }

  initLevel() {
    this.nextValue = 1;
    this.els.level.textContent = this.level;
    this.els.lives.textContent =
      this.mode === 'training' ? '∞' : '❤️'.repeat(Math.max(0, this.lives));
    this.renderBoard();
  }

  runLoop() {
    if (this.timerId) clearInterval(this.timerId);
    let subTick = 0;

    this.timerId = setInterval(() => {
      subTick++;
      const now = Date.now();

      // APM Logic & Colorization
      this.clickHistory = this.clickHistory.filter((t) => now - t < 5000);
      const curAPM = Math.round((this.clickHistory.length / 5) * 60);
      this.totalApmSum += curAPM;
      this.apmTicks++;
      this.els.apm.textContent = curAPM;

      this.els.apm.className = 'hud-span'; // Reset
      if (curAPM >= 280) this.els.apm.classList.add('stat-high');
      else if (curAPM >= 140) this.els.apm.classList.add('stat-mid');
      else this.els.apm.classList.add('stat-low');

      if (curAPM > this.peakAPM) this.peakAPM = curAPM;

      // Resource recovery
      if (this.mode === 'normal') {
        this.tacticalEnergy = Math.min(100, this.tacticalEnergy + 0.15);
        if (this.isHintActive && this.hintBank > 0) {
          this.hintBank = Math.max(0, this.hintBank - 0.2);
          if (this.hintBank <= 0) this.toggleHint(false);
        }
        this.updateUI();
      }

      // Timer Logic & Colorization
      if (subTick >= 10) {
        this.timeLeft--;
        this.els.timer.textContent = this.timeLeft;
        this.els.timer.className = 'hud-span';
        if (this.timeLeft <= 5) this.els.timer.classList.add('stat-crit');
        else if (this.timeLeft <= 15) this.els.timer.classList.add('stat-mid');
        else this.els.timer.classList.add('stat-low');

        if (this.timeLeft <= 0) this.gameOver();
        subTick = 0;
      }
    }, 100);
  }

  renderBoard() {
    const total = this.gridSize * this.gridSize;
    const nums = Array.from({ length: total }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    );

    let props = new Array(total).fill('none');
    props[0] = 'time';
    props[1] = 'hint';
    props.sort(() => Math.random() - 0.5);

    this.els.grid.innerHTML = '';
    for (let r = 0; r < this.gridSize; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < this.gridSize; c++) {
        const td = document.createElement('td');
        td.textContent = nums[r * this.gridSize + c];
        td.dataset.val = td.textContent;
        const p = props.pop();
        if (p === 'time') td.dataset.type = 'time';
        else if (p === 'hint') td.dataset.type = 'hint';
        td.onmousedown = () => this.handleHit(td);
        tr.appendChild(td);
      }
      this.els.grid.appendChild(tr);
    }
  }

  handleHit(el) {
    if (el.classList.contains('correct')) {
      this.triggerShake(el);
      return;
    }
    const val = parseInt(el.dataset.val);
    if (val === this.nextValue) {
      el.classList.add('correct');
      this.clickHistory.push(Date.now());
      if (this.mode === 'normal') {
        if (el.dataset.type === 'hint')
          this.hintBank = Math.min(5, this.hintBank + 0.5);
        if (el.dataset.type === 'time') this.timeLeft += 3;
      }
      this.nextValue++;
      if (this.nextValue > this.gridSize * this.gridSize) {
        if (this.level === 10) this.victory();
        else setTimeout(() => this.nextLevel(), 150);
      }
    } else {
      this.triggerShake(el);
      if (this.mode === 'normal') {
        this.lives--;
        this.els.lives.textContent = '❤️'.repeat(Math.max(0, this.lives));
        if (this.lives <= 0) this.gameOver();
      }
    }
  }

  triggerShake(el) {
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
  }

  nextLevel() {
    this.level++;
    this.gridSize =
      this.level <= 3
        ? 2
        : this.level <= 5
          ? 3
          : this.level <= 7
            ? 4
            : this.level <= 9
              ? 5
              : 6;
    this.timeLeft += 5;
    this.initLevel();
  }

  toggleHint(active) {
    if (this.mode === 'training' || this.hintBank <= 0) return;
    const target = Array.from(document.querySelectorAll('td')).find(
      (td) => parseInt(td.dataset.val) === this.nextValue,
    );
    if (!target) return;
    this.isHintActive = active;
    target.style.boxShadow = active ? 'inset 0 0 20px var(--hint)' : 'none';
    target.style.borderColor = active ? 'var(--hint)' : '#151515';
  }

  usePathfinder() {
    if (this.mode !== 'normal' || this.tacticalEnergy < 40) return;
    this.tacticalEnergy -= 40;
    for (let i = 0; i < 3; i++) {
      const t = Array.from(document.querySelectorAll('td')).find(
        (td) => parseInt(td.dataset.val) === this.nextValue + i,
      );
      if (t) {
        t.style.outline = '3px solid var(--tact)';
        setTimeout(() => (t.style.outline = 'none'), 1500);
      }
    }
  }

  useOverclock() {
    if (this.mode !== 'normal' || this.tacticalEnergy < 60) return;
    this.tacticalEnergy -= 60;
    this.timeLeft += 5;
  }

  updateUI() {
    this.els.hintBank.textContent = this.hintBank.toFixed(1);
    this.els.hintFill.style.width = `${(this.hintBank / 5) * 100}%`;
    this.els.tactEnergy.textContent = Math.floor(this.tacticalEnergy);
    this.els.tactFill.style.width = `${this.tacticalEnergy}%`;
  }

  gameOver() {
    clearInterval(this.timerId);
    this.showResults('SESSION TERMINATED');
  }
  victory() {
    clearInterval(this.timerId);
    if (window.confetti) confetti();
    this.showResults('SYSTEM CONQUERED');
  }

  showResults(title) {
    document.getElementById('result-title').textContent = title;
    document.getElementById('res-level').textContent = this.level;
    document.getElementById('res-time').textContent =
      Math.round((Date.now() - this.startTime) / 1000) + 's';
    document.getElementById('res-peak').textContent = this.peakAPM;
    document.getElementById('res-avg').textContent =
      Math.round(this.totalApmSum / this.apmTicks) || 0;
    this.els.overlay.classList.remove('hidden');
  }
}
const game = new AimEvolution();
