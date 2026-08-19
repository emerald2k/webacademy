# 📦 Lecția 28: React Router v7 Data APIs (CRUD Application)

Această lecție reprezintă proiectul capstone pentru routing și managementul datelor folosind noile **Data APIs** din **React Router v7** (`createBrowserRouter`, `loader`, `action`).

---

## 🎯 Concepte Cheie Învățate

1. **Data Loaders (`loader`):**
   - Fetching-ul și pregătirea datelor înainte de randarea componentelor.
   - Eliminarea pattern-ului clasic `useEffect` + `useState` cu stări intermediare de încărcare.
2. **Form Actions (`action`):**
   - Gestionarea mutațiilor de date (Create, Update, Delete) prin formulare standard `<Form method="post">`.
   - Revalidare automată a datelor pe toate rutele active după trimitere.
3. **Persistență Locală (`LocalStorage`):**
   - Modul dedicat de stocare [`src/storage.js`](./src/storage.js) pentru salvarea stării aplicației în browser.
4. **Layout-uri Globale & Pagină 404:**
   - [`src/layouts/RootLayout.jsx`](./src/layouts/RootLayout.jsx) cu bară de navigare și header comun.
   - [`src/pages/NotFound.jsx`](./src/pages/NotFound.jsx) pentru gestionarea rutelor inexistente.

---

## 📂 Structura Proiectului

```
lectia28/
├── src/
│   ├── layouts/
│   │   └── RootLayout.jsx       # Layout rădăcină cu navigare și Outlet
│   ├── pages/
│   │   ├── Produse.jsx          # Listare produse cu filtrare și acțiuni
│   │   ├── Produs.jsx           # Detalii produs individual
│   │   ├── EditareProdus.jsx    # Formular de adăugare / editare cu acțiuni
│   │   └── NotFound.jsx         # Ecran 404 (Rută negăsită)
│   ├── router.jsx               # Configurația createBrowserRouter (loaders + actions)
│   ├── storage.js               # Operațiuni CRUD pe localStorage
│   ├── main.jsx                 # Entry point cu RouterProvider
│   └── style.css                # Stiluri pentru layout, formulare și tabele
├── package.json
└── index.html
```

---

## 🚀 Rulare Proiect

```bash
# Din acest director:
npm install
npm run dev

# Sau din rădăcina depozitului:
npm run dev:l28
```
