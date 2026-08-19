# 🧪 Lecția 25: Testare E2E cu Playwright & Componente Interactive

Această lecție explorează testarea automată End-to-End (E2E) a aplicațiilor web moderne folosind **Playwright**, alături de o suită de componente React interactive.

---

## 🎯 Componente & Scenarii de Testat

| Componentă | Locație | Rol & Comportament |
| :--- | :--- | :--- |
| **Cart** | [`src/components/Cart.jsx`](./src/components/Cart.jsx) | Coș de cumpărături: adăugare produse, calcul total, golire coș |
| **Coin** | [`src/components/Coin.jsx`](./src/components/Coin.jsx) | Aruncarea monedei: generare aleatorie Head/Tail și tracking scor |
| **Timer** | [`src/components/Timer.jsx`](./src/components/Timer.jsx) | Cronometru cu `setInterval`, `useEffect` cleanup, pauză/reset |
| **Popup** | [`src/components/Popup.jsx`](./src/components/Popup.jsx) | Fereastră modală cu deschidere, închidere și overlay |
| **ProdusFavorit** | [`src/components/ProdusFavorit.jsx`](./src/components/ProdusFavorit.jsx) | Comutare stare favorit (inimioară) și feedback vizual |

---

## 🚀 Rulare Aplicație & Teste

```bash
# Pornire server de dezvoltare
npm run dev

# Rulare teste Playwright (Headless)
npm run test

# Rulare teste în modul UI interactiv
npx playwright test --ui
```
