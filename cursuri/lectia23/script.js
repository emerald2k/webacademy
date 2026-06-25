import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { creazaStilButon } from './style.js';

const headerRoot = createRoot(document.getElementById('headerRoot'));
const footerRoot = createRoot(document.getElementById('footerRoot'));

const stilButonDeBaza = creazaStilButon('baza');
const stilButonSucces = creazaStilButon('succes');
const stilButonEroare = creazaStilButon('eroare');

const stilButonDeBaza = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
};

const stilButonSucces = {
  ...stilButonDeBaza,
  backgroundColor: 'green',
};

const stilButonEroare = {
  backgroundColor: 'red',
};

headerRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
footerRoot.render(
  <StrictMode>
    <Footer />
  </StrictMode>,
);

function Footer() {
  return (
    <footer>
      <p>© 2024 Toate drepturile rezervate.</p>
    </footer>
  );
}

export default function App() {
  const [esteActiv, setEsteActiv] = React.useState(false);

  const stilButon = {
    backgroundColor: esteActiv ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={stilButon} onClick={() => setEsteActiv(!esteActiv)}>
      {esteActiv ? 'Activ' : 'Inactiv'}
      <button style={stilButonDeBaza}>Buton de bază</button>
      <button style={stilButonSucces}>Buton de succes</button>
      <button style={{ ...stilButonDeBaza, ...stilButonEroare }}>
        Buton de eroare
      </button>
    </button>
  );
}
