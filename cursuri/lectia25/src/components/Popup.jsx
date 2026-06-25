import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [deschis, setDeschis] = useState(false);
  const popupRef = useRef(null); // Referință către elementul popup

  useEffect(() => {
    function verificaClick(event) {
      console.log({ popupRef, target: event.target });
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setDeschis(false);
      }
    }

    document.addEventListener('mousedown', verificaClick);

    return () => {
      document.removeEventListener('mousedown', verificaClick);
    };
  }, []);

  return (
    <div>
      <h1>Popup inteligent</h1>

      <button onClick={() => setDeschis(true)}>Deschide popup</button>

      {deschis && (
        <div
          ref={popupRef}
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '2px solid #3FB9C3',
            width: '250px',
          }}
        >
          <h2>Popup deschis</h2>
          <p>Click în afară ca să se închidă.</p>
        </div>
      )}
    </div>
  );
}
