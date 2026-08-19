import {
  Link,
  useLoaderData,
} from "react-router-dom";
import { getProduse } from "../storage";

export function produseLoader() {
  return getProduse();
}

export default function Produse() {
  const produse = useLoaderData();

  return (
    <div>
      <h2>Produse</h2>

      <div className="grid">
        {produse.map((produs) => (
          <article
            className="card"
            key={produs.id}
          >
            <h3>{produs.nume}</h3>

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

            <Link
              className="button-link"
              to={`/produse/${produs.id}`}
            >
              Vezi produsul
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
