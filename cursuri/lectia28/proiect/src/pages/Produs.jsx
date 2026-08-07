import {
  Link,
  useLoaderData,
} from "react-router-dom";

import { getProdus } from "../storage";

export function produsLoader({ params }) {
  const produs = getProdus(
    params.produsId
  );

  if (!produs) {
    throw new Response(
      "Produsul nu există.",
      {
        status: 404,
      }
    );
  }

  return produs;
}

export default function Produs() {
  const produs = useLoaderData();

  return (
    <div className="card detalii">
      <h2>{produs.nume}</h2>

      <p>
        <strong>Preț:</strong>{" "}
        {produs.pret} lei
      </p>

      <p>
        <strong>Categorie:</strong>{" "}
        {produs.categorie}
      </p>

      <p>
        <strong>Stoc:</strong>{" "}
        {produs.stoc}
      </p>

      <p>
        <strong>Descriere:</strong>{" "}
        {produs.descriere}
      </p>

      <div className="actions">
        <Link
          className="button-link"
          to="editare"
        >
          Editează produsul
        </Link>

        <Link
          className="button-secondary"
          to="/produse"
        >
          Înapoi la produse
        </Link>
      </div>
    </div>
  );
}
