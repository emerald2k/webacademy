# ⚛️ Lecția 21: Introducere în React & Vite

Această lecție marchează trecerea de la Vanilla JavaScript la **React 19** folosind **Vite** ca bundler modern și rapid.

---

## 🎯 Concepte Cheie Învățate

1. **Vite Tooling & HMR:**
   - Structura unui proiect React modern (`index.html`, `src/main.jsx`, `src/App.jsx`).
   - Hot Module Replacement (HMR) pentru actualizări instantanee în browser.
2. **Componente & JSX:**
   - Sintaxa JSX (JavaScript XML) și reguli de scriere (element părinte unic, `className`, `htmlFor`).
   - Componente funcționale și compunerea lor.
3. **Props & Transmiterea Datelor:**
   - Transmiterea de proprietăți către componente copil.
   - De-structurarea `props` și setarea de valori implicite.
4. **Stare Locală (`useState`):**
   - Schimbarea temei paginii (`PageTheme.jsx`).
   - Carduri de produse interactive (`ProdusCard.jsx`).

---

## 📂 Structura Proiectului

- [`src/App.jsx`](./src/App.jsx) — Componenta rădăcină a aplicației
- [`src/components/NavList.jsx`](./src/components/NavList.jsx) — Meniu de navigare dinamic
- [`src/components/PageTheme.jsx`](./src/components/PageTheme.jsx) — Comutator de temă Dark / Light
- [`src/components/ProdusCard.jsx`](./src/components/ProdusCard.jsx) — Card de produs reutilizabil cu stare

---

## 🚀 Rulare Proiect

```bash
# Din acest director:
npm install
npm run dev

# Sau din rădăcina depozitului:
npm run dev:l21
```
