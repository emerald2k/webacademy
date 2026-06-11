import { useState } from 'react';

function PageTheme() {
  // State for theme, can be 'light' or 'dark'
  const [theme, setTheme] = useState('light');

  const stilPagina = {
    // CSS style object
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <div style={stilPagina}>
      <h1>Pagina cu tema {theme}</h1>
      <button onClick={() => setTheme('light')}>Tema deschisa</button>
      <button onClick={() => setTheme('dark')}>Tema inchisa</button>
    </div>
  );
}

export default PageTheme;
