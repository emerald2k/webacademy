import { NavLink, Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div>
      <header>
        <h1>Magazin Online</h1>

        <nav>
          <NavLink to="/produse">Produse</NavLink>
        </nav>
      </header>

      <hr />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
