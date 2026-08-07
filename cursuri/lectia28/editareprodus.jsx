import { Link, useLoaderData } from 'react-router';

import { getProdus } from '../storage';

export function produsLoader({ params }) {
  const produs = getProdus(params.produsId);

  if (!produs) {
    throw new Response('Produsul nu există.', {
      status: 404,
    });
  }

  return produs;
}

export default function Produs() {
  const produs = useLoaderData();

  return (
    <div>
      <h2>{produs.nume}</h2>

      <p>
        <strong>Preț:</strong> {produs.pret} lei
      </p>

      <p>
        <strong>Categorie:</strong> {produs.categorie}
      </p>

      <p>
        <strong>Stoc:</strong> {produs.stoc} bucăți
      </p>

      <p>
        <strong>Descriere:</strong> {produs.descriere}
      </p>

      <Link to="editare">Editează produsul</Link>
    </div>
  );
}
export function editareLoader({ params }) {
  const produs = getProdus(params.produsId);

  if (!produs) {
    throw new Response('Produsul nu a fost găsit.', {
      status: 404,
    });
  }

  return produs;
}
