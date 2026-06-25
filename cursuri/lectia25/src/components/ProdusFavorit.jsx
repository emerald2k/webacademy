import { useState } from 'react';

const produseInitiale = [
  { id: 1, nume: 'Laptop', favorit: false },
  { id: 2, nume: 'Telefon', favorit: false },
  { id: 3, nume: 'Căști', favorit: false },
  { id: 4, nume: 'Monitor', favorit: false },
];

export default function App() {
  const [produse, setProduse] = useState(produseInitiale);

  function schimbaFavorit(id) {
    const listaNoua = produse.map((produs) =>
      produs.id === id ? { ...produs, favorit: !produs.favorit } : produs,
    );

    setProduse(listaNoua);
  }

  return (
    <div>
      <h1>Produse favorite</h1>

      {produse.map((produs) => (
        <div key={produs.id}>
          <span>{produs.nume}</span>
          <button onClick={() => schimbaFavorit(produs.id)}>
            {produs.favorit ? '❤️ Favorit' : '🤍 Adaugă la favorite'}
          </button>
        </div>
      ))}
    </div>
  );
}
