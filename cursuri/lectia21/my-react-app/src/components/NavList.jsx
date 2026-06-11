import react from 'react';

function NavList() {
  const [tabActive, setTabActive] = react.useState('acasa');

  return (
    <nav>
      <h1>Menu cu tabs</h1>

      <button onClick={() => setTabActive('acasa')}>Acasa</button>
      <button onClick={() => setTabActive('despre')}>Despre</button>
      <button onClick={() => setTabActive('contact')}>Contact</button>

      {tabActive === 'acasa' && <p>Aceasta este pagina principala</p>}
      {tabActive === 'despre' && <p>Aceasta este pagina despre</p>}
      {tabActive === 'contact' && <p>Aceasta este pagina de contact</p>}
    </nav>
  );
}

export default NavList;
