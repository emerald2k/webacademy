import { useEffect, useMemo, useState } from 'react';

export default function Coin() {
  const [monede, setMonede] = useState(10);
  const [nivel, setNivel] = useState(1);
  const [tema, setTema] = useState(false);

  const scor = useMemo(() => {
    // Recalculăm scorul doar când monede sau nivel se schimbă
    console.log('Scor recalculat');

    return monede * nivel * 100;
  }, [monede, nivel]); // scor depinde de monede și nivel

  const scor2 = useEffect(() => {
    // Recalculăm scorul doar când monede sau nivel se schimbă
    console.log('Scor recalculat');

    return monede * nivel * 100;
  }, [monede, nivel]); // scor depinde de monede și nivel

  return (
    <div
      style={{
        backgroundColor: tema ? '#111' : '#fff',
        color: tema ? '#fff' : '#111',
        minHeight: '100vh',
        padding: '30px',
      }}
    >
      <h1>Scor joc</h1>
      <h2>Monede: {monede}</h2>
      <h2>Nivel: {nivel}</h2>
      <h2>Scor: {scor}</h2>

      <button onClick={() => setMonede(monede + 1)}>Adaugă monedă</button>
      <button onClick={() => setNivel(nivel + 1)}>Nivel nou</button>
      <button onClick={() => setTema(!tema)}>Schimbă tema</button>
    </div>
  );
}
