import { BrowserRouter, Routes, Route, NavLink } from 'react-router';

function Home() {
  return <h1>Pagina principală</h1>;
}

function Services() {
  return <h1>Serviciile noastre</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default function App() {
  return (
    // BrowserRouter este un component care oferă contextul de routing pentru aplicația React. Acesta trebuie să înconjoare toate componentele care utilizează routing-ul, cum ar fi Routes și Route
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>
          Acasă
        </NavLink>{' '}
        | <NavLink to="/servicii">Servicii</NavLink> |{' '}
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicii" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
