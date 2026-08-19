# 🎮 Tema 8: AimEvolution / Vibecode Neural Tactical Interface

O aplicație interactivă complexă de antrenament al reflexelor și vitezei de reacție (APM - Actions Per Minute), realizată cu arhitectură orientată pe obiecte în JavaScript, efecte de particule/confetti și interfață vizuală tactică (Cyberpunk/Sci-Fi HUD).

---

## 🎯 Funcționalități Implementate

- **Moduri de Joc:**
  - `Initiate Phase` — Mod competitiv cu progresie strategică, niveluri și gestionare de vieți / timp.
  - `Training Sim` — Mod de antrenament cu energie infinită și asistență persistentă.
- **Sistem de Abilități Tactice:**
  - `Space` — Hold Hint (motor de predicție ghidat).
  - `Q` — Pathfinder Scan (reducere opțiuni cu consum energetic).
  - `W` — Overclock (+5 secunde timp adițional).
- **HUD & Statistici în Timp Real:**
  - Calcul automat APM (Actions Per Minute) curent, peak și medie.
  - Tracker de nivel, vieți și timp rămas.
  - Ecran de rezultate detaliat la finalizarea sesiunii.
- **Efecte Vizuale:** Confetti la victorie, tranziții fluide, CSS Custom Properties (temă Neon Dark).

---

## 📂 Structura Proiectului

- [`vibecode/index.html`](./vibecode/index.html) — Interfața principală a jocului
- [`vibecode/script.js`](./vibecode/script.js) — Logica completă a jocului (State Machine, Timer, Scoring, Audio/Confetti)
- [`vibecode/style.css`](./vibecode/style.css) — Design futurist, HUD și stilizare tabel
- [`demo.mp4`](./demo.mp4) — Prezentare video completă a jocului
