import {
  Routes,
  Route,
  NavLink,
  Outlet,
  Navigate,
  BrowserRouter,
} from 'react-router';

import Lessons from './Lessons.jsx';

function ProfileLayout() {
  return (
    <>
      <h1>Contul meu</h1>

      <nav>
        <NavLink to="profil">Profil</NavLink>

        {' | '}

        <NavLink to="comenzi">Comenzi</NavLink>

        {' | '}

        <NavLink to="securitate">Securitate</NavLink>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

function Profile() {
  return <h2>Date personale</h2>;
}

function Orders() {
  return <h2>Comenzile mele</h2>;
}

function Security() {
  return <h2>Schimbă parola</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lessons />} />
        <Route path="/cont" element={<ProfileLayout />}>
          {' '}
          // Parent route for the profile section
          <Route index element={<Navigate to="profil" replace />} /> // Redirect
          to the default sub-route
          <Route path="profil" element={<Profile />} /> // Default sub-route
          <Route path="comenzi" element={<Orders />} /> // Sub-route for orders
          <Route path="securitate" element={<Security />} /> // Sub-route for
          security
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
