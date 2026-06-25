import { useEffect, useState } from 'react';

export default function Key({ litera, apasata }) {
  const [tastata, setTastata] = useState(false);

  useEffect(() => {
    console.log('Componenta Key a fost montată');
    function handleKeyDown(event) {
      const key = event.key === ' ' ? 'Space' : event.key;
      setTastata(key);
    }
    window.addEventListener('keydown', handleKeyDown); // Adăugăm un listener pentru evenimentul "keydown"

    return () => {
      console.log('Componenta Key a fost demontată');
      window.removeEventListener('keydown', handleKeyDown); // Curățăm listener-ul când componenta se demontează
    };
  }, []); // Efectul se execută o singură dată la montarea componentei

  return (
    <div>
      <h1>Apasă o tastă</h1>
      <h2>
        {tastata
          ? `Tasta apăsată: ${tastata}`
          : 'Așteptăm apăsarea unei taste...'}
      </h2>
    </div>
  );
}
