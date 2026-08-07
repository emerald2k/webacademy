import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card">
      <h2>404 - Pagina nu a fost găsită</h2>

      <Link
        className="button-link"
        to="/produse"
      >
        Înapoi la produse
      </Link>
    </div>
  );
}
