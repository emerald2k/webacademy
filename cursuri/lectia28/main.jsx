import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router';

import { getProdus, updateProdus } from '../storage';

export function editareLoader({ params }) {
  const produs = getProdus(params.produsId);

  if (!produs) {
    throw new Response('Produsul nu a fost găsit.', {
      status: 404,
    });
  }

  return produs;
}

export async function editareAction({ request, params }) {
  const formData = await request.formData();

  const nume = formData.get('nume')?.trim();

  const pret = Number(formData.get('pret'));

  const categorie = formData.get('categorie')?.trim();

  const stoc = Number(formData.get('stoc'));

  const descriere = formData.get('descriere')?.trim();

  const erori = {};

  if (!nume) {
    erori.nume = 'Numele produsului este obligatoriu.';
  }

  if (Number.isNaN(pret) || pret <= 0) {
    erori.pret = 'Prețul trebuie să fie mai mare decât 0.';
  }

  if (!categorie) {
    erori.categorie = 'Categoria este obligatorie.';
  }

  if (Number.isNaN(stoc) || stoc < 0) {
    erori.stoc = 'Stocul nu poate fi negativ.';
  }

  if (!descriere || descriere.length < 10) {
    erori.descriere = 'Descrierea trebuie să aibă minimum 10 caractere.';
  }

  if (Object.keys(erori).length > 0) {
    return {
      erori,
    };
  }

  updateProdus(params.produsId, {
    nume,
    pret,
    categorie,
    stoc,
    descriere,
  });

  return redirect(`/produse/${params.produsId}`);
}

export default function EditareProdus() {
  const produs = useLoaderData();

  const actionData = useActionData();

  const navigation = useNavigation();

  const seSalveaza = navigation.state === 'submitting';

  return (
    <div>
      <h2>Editare produs</h2>

      <h3>{produs.nume}</h3>

      <Form method="post">
        <div>
          <label>Nume produs:</label>

          <br />

          <input type="text" name="nume" defaultValue={produs.nume} />

          {actionData?.erori?.nume && <p>{actionData.erori.nume}</p>}
        </div>

        <br />

        <div>
          <label>Preț:</label>

          <br />

          <input type="number" name="pret" defaultValue={produs.pret} />

          {actionData?.erori?.pret && <p>{actionData.erori.pret}</p>}
        </div>

        <br />

        <div>
          <label>Categorie:</label>

          <br />

          <input type="text" name="categorie" defaultValue={produs.categorie} />

          {actionData?.erori?.categorie && <p>{actionData.erori.categorie}</p>}
        </div>

        <br />

        <div>
          <label>Stoc:</label>

          <br />

          <input type="number" name="stoc" defaultValue={produs.stoc} />

          {actionData?.erori?.stoc && <p>{actionData.erori.stoc}</p>}
        </div>

        <br />

        <div>
          <label>Descriere:</label>

          <br />

          <textarea name="descriere" rows="5" defaultValue={produs.descriere} />

          {actionData?.erori?.descriere && <p>{actionData.erori.descriere}</p>}
        </div>

        <br />

        <button type="submit" disabled={seSalveaza}>
          {seSalveaza ? 'Se salvează...' : 'Salvează modificările'}
        </button>
      </Form>

      <br />

      <Link to={`/produse/${produs.id}`}>Anulează</Link>
    </div>
  );
}
