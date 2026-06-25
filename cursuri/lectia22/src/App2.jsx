import { useState } from 'react';

function App2() {
  const [produse, setProduse] = useState([
    { id: 1, nume: 'Laptop', pret: 3500, categorie: 'Electronice' },
    { id: 2, nume: 'Mouse', pret: 100, categorie: 'Accesorii' },
    { id: 3, nume: 'Telefon', pret: 2500, categorie: 'Electronice' },
  ]);

  const [nume, setNume] = useState('');

  const [pret, setPret] = useState('');

  const [categorie, setCategorie] = useState('');

  const [cautare, setCautare] = useState('');

  const [eroare, setEroare] = useState('');

  function valideazaProdus() {
    if (nume.trim() === '') {
      return 'Numele produsului este obligatoriu.';
    }

    if (pret === '' || Number(pret) <= 0) {
      return 'Prețul trebuie să fie mai mare decât 0.';
    }

    if (categorie.trim() === '') {
      return 'Categoria este obligatorie.';
    }

    return '';
  }

  function adaugaProdus() {
    const mesajEroare = valideazaProdus();

    if (mesajEroare !== '') {
      setEroare(mesajEroare);

      return;
    }

    const produsNou = {
      id: Date.now(),

      nume: nume,

      pret: Number(pret),

      categorie: categorie,
    };

    setProduse([...produse, produsNou]);

    setNume('');

    setPret('');

    setCategorie('');

    setEroare('');
  }

  function stergeProdus(id) {
    const listaNoua = produse.filter((produs) => produs.id !== id);

    setProduse(listaNoua);
  }

  function filtreazaProduse() {
    return produse.filter((produs) =>
      produs.nume.toLowerCase().includes(cautare.toLowerCase()),
    );
  }

  function calculeazaTotal(listaProduse) {
    return listaProduse.reduce((total, produs) => {
      return total + produs.pret;
    }, 0);
  }

  function calculeazaReducere(total) {
    if (total >= 5000) {
      return total * 0.1;
    }

    return 0;
  }

  function calculeazaTotalFinal(total, reducere) {
    return total - reducere;
  }

  const produseFiltrate = filtreazaProduse();

  const total = calculeazaTotal(produseFiltrate);

  const reducere = calculeazaReducere(total);

  const totalFinal = calculeazaTotalFinal(total, reducere);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Manager produse</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nume produs"
          value={nume}
          onChange={(event) => setNume(event.target.value)}
        />

        <input
          type="number"
          placeholder="Preț"
          value={pret}
          onChange={(event) => setPret(event.target.value)}
        />

        <input
          type="text"
          placeholder="Categorie"
          value={categorie}
          onChange={(event) => setCategorie(event.target.value)}
        />

        <button onClick={adaugaProdus}>Adaugă produs</button>
      </div>

      {eroare && <p style={{ color: 'red' }}>{eroare}</p>}

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Caută produs"
          value={cautare}
          onChange={(event) => setCautare(event.target.value)}
        />
      </div>

      <h2>Lista produse</h2>

      {produseFiltrate.length === 0 ? (
        <p>Nu există produse găsite.</p>
      ) : (
        produseFiltrate.map((produs) => (
          <div
            key={produs.id}
            style={{
              border: '1px solid #ccc',

              padding: '10px',

              marginBottom: '10px',
            }}
          >
            <h3>{produs.nume}</h3>
            <p>Preț: {produs.pret} lei</p>
            <p>Categorie: {produs.categorie}</p>

            <button onClick={() => stergeProdus(produs.id)}>Șterge</button>
          </div>
        ))
      )}

      <hr />

      <h2>Rezumat</h2>
      <p>Total produse afișate: {produseFiltrate.length}</p>
      <p>Total: {total} lei</p>
      <p>Reducere: {reducere} lei</p>
      <h3>Total final: {totalFinal} lei</h3>
    </div>
  );
}

export default App2;
