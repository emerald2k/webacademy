const CHEIE = 'produse';

const produseInitiale = [
  {
    id: '1',

    nume: 'Laptop ASUS',

    pret: 4500,

    categorie: 'Laptopuri',

    stoc: 7,

    descriere: 'Laptop performant pentru programare.',
  },

  {
    id: '2',

    nume: 'Samsung Galaxy',

    pret: 2800,

    categorie: 'Telefoane',

    stoc: 12,

    descriere: 'Telefon Android performant.',
  },

  {
    id: '3',

    nume: 'Monitor LG',

    pret: 1200,

    categorie: 'Monitoare',

    stoc: 5,

    descriere: 'Monitor de 27 inch.',
  },
];

function initializare() {
  const produse = localStorage.getItem(CHEIE);

  if (!produse) {
    localStorage.setItem(
      CHEIE,

      JSON.stringify(produseInitiale),
    );
  }
}

export function getProduse() {
  initializare();

  return JSON.parse(localStorage.getItem(CHEIE));
}

export function getProdus(id) {
  const produse = getProduse();

  return produse.find((produs) => produs.id === id);
}

export function updateProdus(id, dateNoi) {
  const produse = getProduse();

  const produseActualizate = produse.map((produs) => {
    if (produs.id === id) {
      return {
        ...produs,

        ...dateNoi,
      };
    }

    return produs;
  });

  localStorage.setItem(
    CHEIE,

    JSON.stringify(produseActualizate),
  );

  return getProdus(id);
}

router.jsx;

import { createBrowserRouter } from 'react-router';

import RootLayout from './layouts/RootLayout';

import Produse from './pages/Produse';

import Produs, { produsLoader } from './pages/Produs';

import EditareProdus, {
  editareAction,
  editareLoader,
} from './pages/EditareProdus';

const router = createBrowserRouter([
  {
    path: '/',

    Component: RootLayout,

    children: [
      {
        path: 'produse',

        Component: Produse,
      },

      {
        path: 'produse/:produsId',

        loader: produsLoader,

        Component: Produs,
      },

      {
        path: 'produse/:produsId/editare',

        loader: editareLoader,

        action: editareAction,

        Component: EditareProdus,
      },
    ],
  },
]);

export default router;
