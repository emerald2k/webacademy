import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Produse, { produseLoader } from "./pages/Produse";
import Produs, { produsLoader } from "./pages/Produs";
import EditareProdus, {
  editareLoader,
  editareAction,
} from "./pages/EditareProdus";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: produseLoader,
        Component: Produse,
      },
      {
        path: "produse",
        loader: produseLoader,
        Component: Produse,
      },
      {
        path: "produse/:produsId",
        loader: produsLoader,
        Component: Produs,
      },
      {
        path: "produse/:produsId/editare",
        loader: editareLoader,
        action: editareAction,
        Component: EditareProdus,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
