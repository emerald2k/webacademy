# 🌲 Lecția 27: Rute Imbricate & Layouts (Nested Routes & Outlets)

Această lecție explorează arhitectura rutelor avansate cu **Nested Routing**, componente de tip **Layout** și **Outlet** în React Router.

---

## 🎯 Concepte Cheie Învățate

1. **Rute Părinte & Copil (Nested Routes):**
   - Structurarea ierarhică a URL-urilor (`/profile`, `/profile/settings`, `/profile/files`).
   - Păstrarea layout-ului părinte în timp ce doar secțiunea copil se schimbă.
2. **Componenta `<Outlet />`:**
   - Punctul de inserare dinamică unde sunt randate componentele rutelor copil.
3. **Parametri Dinamici (`useParams`):**
   - Extragerea identificatorilor din URL (ex: `/products/:id`).
4. **Componente Practice:**
   - [`FileExplorer.jsx`](./src/FileExplorer.jsx) — Arbore de directoare navigabil
   - [`Profile.jsx`](./src/Profile.jsx) & [`Settings.jsx`](./src/Settings.jsx) — Layout de profil cu sub-rute
   - [`Products.jsx`](./src/Products.jsx) & [`Article.jsx`](./src/Article.jsx) — Listare și detalii dinamice

---

## 🚀 Rulare Proiect

```bash
# Din acest director:
npm install
npm run dev

# Sau din rădăcina depozitului:
npm run dev:l27
```
