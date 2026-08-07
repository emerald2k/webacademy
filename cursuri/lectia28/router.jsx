import { createBrowserRouter } from 'react-router';

import RootLayout from './layouts/RootLayout';

import Produs, { produsLoader } from './pages/Produs';
import Produse from './pages/Produse';

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
