import { useState } from 'react';

/**
 * Exercițiul 5: Administrare Produse (CRUD Complet în React State)
 * Demonstrează Create, Read, Update, Delete cu stare de editare (editId).
 */
export default function App5_ProductCRUD() {
  const [produse, setProduse] = useState([
    { id: 1, nume: 'Tastatură Mecanică', pret: 350 },
    { id: 2, nume: 'Mouse Wireless', pret: 180 },
    { id: 3, nume: 'Monitor 27 inch', pret: 1200 },
  ]);
  const [nume, setNume] = useState('');
  const [pret, setPret] = useState('');
  const [editId, setEditId] = useState(null);

  function salveazaProdus(e) {
    if (e) e.preventDefault();
    if (nume.trim() === '' || pret.trim() === '') return;

    if (editId === null) {
      const produsNou = {
        id: Date.now(),
        nume: nume.trim(),
        pret: Number(pret),
      };
      setProduse([...produse, produsNou]);
    } else {
      const produseActualizate = produse.map((produs) => {
        if (produs.id === editId) {
          return {
            ...produs,
            nume: nume.trim(),
            pret: Number(pret),
          };
        }
        return produs;
      });
      setProduse(produseActualizate);
      setEditId(null);
    }
    setNume('');
    setPret('');
  }

  function editeazaProdus(produs) {
    setNume(produs.nume);
    setPret(String(produs.pret));
    setEditId(produs.id);
  }

  function stergeProdus(id) {
    const produseRamase = produse.filter((produs) => produs.id !== id);
    setProduse(produseRamase);
    if (editId === id) {
      setEditId(null);
      setNume('');
      setPret('');
    }
  }

  function anuleazaEditarea() {
    setEditId(null);
    setNume('');
    setPret('');
  }

  return (
    <div className="card">
      <h2>Exercițiul 5: Administrare Produse (CRUD State)</h2>
      <form onSubmit={salveazaProdus} style={{ marginBottom: '20px' }}>
        <input
          placeholder="Nume produs"
          value={nume}
          onChange={(event) => setNume(event.target.value)}
        />
        <input
          type="number"
          placeholder="Preț (RON)"
          value={pret}
          onChange={(event) => setPret(event.target.value)}
        />
        <button type="submit">
          {editId === null ? '+ Adaugă produs' : '💾 Salvează modificarea'}
        </button>
        {editId !== null && (
          <button type="button" className="secondary" onClick={anuleazaEditarea}>
            Anulează
          </button>
        )}
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {produse.map((produs) => (
          <div
            key={produs.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>{produs.nume}</h4>
              <p style={{ margin: '4px 0 0 0', color: '#2563eb', fontWeight: 'bold' }}>
                {produs.pret} RON
              </p>
            </div>
            <div>
              <button
                type="button"
                className="secondary"
                onClick={() => editeazaProdus(produs)}
                style={{ margin: '0 6px 0 0', padding: '6px 12px' }}
              >
                Editează
              </button>
              <button
                type="button"
                className="danger"
                onClick={() => stergeProdus(produs.id)}
                style={{ margin: 0, padding: '6px 12px' }}
              >
                Șterge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
