import {
  NavLink,
  Outlet,
  useNavigation,
} from "react-router-dom";

export default function RootLayout() {
  const navigation = useNavigation();

  const seIncarca =
    navigation.state !== "idle";

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Magazin Online</h1>
          <p>Exemplu React Router + localStorage</p>
        </div>

        <nav>
          <NavLink
            to="/produse"
            className={({ isActive }) =>
              isActive
                ? "nav-link activ"
                : "nav-link"
            }
          >
            Produse
          </NavLink>
        </nav>
      </header>

      {seIncarca && (
        <div className="loading">
          Se procesează...
        </div>
      )}

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
