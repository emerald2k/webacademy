import { useState } from 'react';

export default function App() {
  const [progres, seteazaProgres] = useState(30);

  const stilBaraProgres = {
    width: `${progres}%`,
    height: '100%',
    borderRadius: 20,
    backgroundColor: progres === 100 ? '#16a34a' : '#2563eb',
    transition: 'width 0.3s ease',
  };

  function maresteProgresul() {
    seteazaProgres((valoareCurenta) => Math.min(valoareCurenta + 10, 100));
  }

  return (
    <div style={{ width: 400 }}>
      <p>Progres: {progres}%</p>

      <div
        style={{
          height: 24,
          borderRadius: 20,
          backgroundColor: '#e2e8f0',
          overflow: 'hidden',
        }}
      >
        <div style={stilBaraProgres} />
      </div>

      <button
        onClick={maresteProgresul}
        disabled={progres === 100}
        style={{ marginTop: 16 }}
      >
        Mărește progresul
      </button>
    </div>
  );
}
