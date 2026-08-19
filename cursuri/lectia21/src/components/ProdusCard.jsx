import { useState } from 'react';

function ProdusCard({ produs, adaugaInCos }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        marginBottom: '10px',
      }}
    >
      <h2>{produs.nume}</h2>
      <p>Pret: {produs.pret} RON</p>
      <button onClick={() => adaugaInCos(produs)}>Adauga in cos</button>
    </div>
  );
}
function App() {
  const produse = [
    { id: 1, nume: 'Seminte Banzai', pret: 5 },
    { id: 2, nume: 'Chipsuri Leodor', pret: 4 },
    { id: 3, nume: 'Taitei NUDO', pret: 3 },
    { id: 4, nume: 'Jeleuri Larbee', pret: 6 },
  ];
  const [cos, setCos] = useState([]);
  function adaugaInCos(produs) {
    setCos([...cos, produs]);
  }
  function stergeDinCos(indexDeSters) {
    const cosNou = cos.filter((produs, index) => index !== indexDeSters);
    setCos(cosNou);
  }
  const total = cos.reduce((suma, produs) => suma + produs.pret, 0);
  return (
    <div style={{ padding: '30px' }}>
      <h1>Magazin online simplu</h1>
      <h2>Produse disponibile</h2>
      {produse.map((produs) => (
        <ProdusCard key={produs.id} produs={produs} adaugaInCos={adaugaInCos} />
      ))}
      <hr />
      <h2>Cos de cumparaturi</h2>
      {cos.length === 0 ? (
        <p>Cosul este gol.</p>
      ) : (
        <ul>
          {cos.map((produs, index) => (
            <li key={index}>
              {produs.nume} - {produs.pret} RON
              <button onClick={() => stergeDinCos(index)}>Sterge</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {total} RON</h3>
    </div>
  );
}

export default App;
