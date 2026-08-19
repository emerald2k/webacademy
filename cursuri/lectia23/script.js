import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { creazaStilButon } from './style.js';

const stilButonDeBaza = creazaStilButon('baza');
const stilButonSucces = creazaStilButon('succes');
const stilButonEroare = creazaStilButon('eroare');

function Footer() {
  return (
    <footer>
      <p>© 2024 Toate drepturile rezervate.</p>
    </footer>
  );
}

export default function App() {
  const [esteActiv, setEsteActiv] = useState(false);

  const stilButon = {
    backgroundColor: esteActiv ? '#16a34a' : '#dc2626',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <button style={stilButon} onClick={() => setEsteActiv(!esteActiv)}>
        {esteActiv ? 'Activ' : 'Inactiv'}
      </button>
      <button style={stilButonDeBaza}>Buton de bază</button>
      <button style={stilButonSucces}>Buton de succes</button>
      <button style={stilButonEroare}>Buton de eroare</button>
    </div>
  );
}

const headerRootElement = document.getElementById('headerRoot');
if (headerRootElement) {
  const headerRoot = createRoot(headerRootElement);
  headerRoot.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

const footerRootElement = document.getElementById('footerRoot');
if (footerRootElement) {
  const footerRoot = createRoot(footerRootElement);
  footerRoot.render(
    <StrictMode>
      <Footer />
    </StrictMode>,
  );
}
