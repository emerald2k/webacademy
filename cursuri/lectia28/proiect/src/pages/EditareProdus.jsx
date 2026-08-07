import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

import {
  getProdus,
  updateProdus,
} from "../storage";

export function editareLoader({ params }) {
  const produs = getProdus(
    params.produsId
  );

  if (!produs) {
    throw new Response(
      "Produsul nu a fost găsit.",
      {
        status: 404,
      }
    );
  }

  return produs;
}

export async function editareAction({
  request,
  params,
}) {
  const formData =
    await request.formData();

  const nume =
    formData.get("nume")?.trim();

  const pret =
    Number(formData.get("pret"));

  const categorie =
    formData.get("categorie")?.trim();

  const stoc =
    Number(formData.get("stoc"));

  const descriere =
    formData.get("descriere")?.trim();

  const erori = {};

  if (!nume) {
    erori.nume =
      "Numele produsului este obligatoriu.";
  }

  if (
    Number.isNaN(pret) ||
    pret <= 0
  ) {
    erori.pret =
      "Prețul trebuie să fie mai mare decât 0.";
  }

  if (!categorie) {
    erori.categorie =
      "Categoria este obligatorie.";
  }

  if (
    Number.isNaN(stoc) ||
    stoc < 0
  ) {
    erori.stoc =
      "Stocul nu poate fi negativ.";
  }

  if (
    !descriere ||
    descriere.length < 10
  ) {
    erori.descriere =
      "Descrierea trebuie să aibă minimum 10 caractere.";
  }

  if (
    Object.keys(erori).length > 0
  ) {
    return {
      erori,
    };
  }

  updateProdus(
    params.produsId,
    {
      nume,
      pret,
      categorie,
      stoc,
      descriere,
    }
  );

  return redirect(
    `/produse/${params.produsId}`
  );
}

export default function EditareProdus() {
  const produs = useLoaderData();

  const actionData =
    useActionData();

  const navigation =
    useNavigation();

  const seSalveaza =
    navigation.state === "submitting";

  return (
    <div className="card formular-card">
      <h2>Editare produs</h2>

      <Form method="post">
        <div className="field">
          <label htmlFor="nume">
            Nume:
          </label>

          <input
            id="nume"
            type="text"
            name="nume"
            defaultValue={produs.nume}
          />

          {actionData?.erori?.nume && (
            <p className="error">
              {actionData.erori.nume}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="pret">
            Preț:
          </label>

          <input
            id="pret"
            type="number"
            name="pret"
            defaultValue={produs.pret}
          />

          {actionData?.erori?.pret && (
            <p className="error">
              {actionData.erori.pret}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="categorie">
            Categorie:
          </label>

          <input
            id="categorie"
            type="text"
            name="categorie"
            defaultValue={produs.categorie}
          />

          {actionData?.erori?.categorie && (
            <p className="error">
              {actionData.erori.categorie}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="stoc">
            Stoc:
          </label>

          <input
            id="stoc"
            type="number"
            name="stoc"
            defaultValue={produs.stoc}
          />

          {actionData?.erori?.stoc && (
            <p className="error">
              {actionData.erori.stoc}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="descriere">
            Descriere:
          </label>

          <textarea
            id="descriere"
            name="descriere"
            rows="5"
            defaultValue={produs.descriere}
          />

          {actionData?.erori?.descriere && (
            <p className="error">
              {actionData.erori.descriere}
            </p>
          )}
        </div>

        <div className="actions">
          <button
            type="submit"
            disabled={seSalveaza}
          >
            {seSalveaza
              ? "Se salvează..."
              : "Salvează"}
          </button>

          <Link
            className="button-secondary"
            to={`/produse/${produs.id}`}
          >
            Anulează
          </Link>
        </div>
      </Form>
    </div>
  );
}
