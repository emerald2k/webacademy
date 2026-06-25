import { useState } from 'react';

const produse = [
  { id: 1, nume: 'Cafea', pret: 25 },
  { id: 2, nume: 'Ceai', pret: 15 },
  { id: 3, nume: 'Ciocolată', pret: 10 },
];

export default function Cart() {
  const [cos, setCos] = useState([]);

  function adaugaInCos(produs) {
    setCos([...cos, produs]);
  }

  function golesteCosul() {
    setCos([]);
  }

  const total = cos.reduce((suma, produs) => suma + produs.pret, 0);

  return (
    <div>
      <h1>Mini magazin</h1>

      {produse.map((produs) => (
        <div key={produs.id}>
          {produs.nume} - {produs.pret} lei
          <button onClick={() => adaugaInCos(produs)}>Adaugă</button>
        </div>
      ))}

      <h2>Produse în coș: {cos.length}</h2>
      <h2>Total: {total} lei</h2>

      <button onClick={golesteCosul}>Golește coșul</button>
    </div>
  );
}
