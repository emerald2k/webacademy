import { useState } from 'react';

/**
 * Exercițiul 4: Listă Dinamică de Produse (Array State & Immutability)
 * Demonstrează adăugarea și ștergerea elementelor dintr-un array menținând imutabilitatea.
 */
export default function App4_ProductList() {
  const [produs, setProdus] = useState('');
  const [produse, setProduse] = useState(['Cafea Arabica', 'Ceai Verde', 'Croissant']);

  function adaugaProdus() {
    if (produs.trim() !== '') {
      setProduse([...produse, produs.trim()]);
      setProdus('');
    }
  }

  function stergeProdus(index) {
    const produseActualizate = produse.filter((_, i) => i !== index);
    setProduse(produseActualizate);
  }

  return (
    <div className="card">
      <h2>Exercițiul 4: Listă Dinamică (Immutability Pattern)</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Introdu denumirea produsului..."
          value={produs}
          onChange={(e) => setProdus(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && adaugaProdus()}
        />
        <button onClick={adaugaProdus} style={{ whiteSpace: 'nowrap', height: '45px' }}>
          Adaugă Produs
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
        {produse.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              marginBottom: '8px',
            }}
          >
            <span style={{ fontWeight: 500 }}>{item}</span>
            <button
              onClick={() => stergeProdus(index)}
              className="danger"
              style={{ margin: 0, padding: '6px 12px', fontSize: '13px' }}
            >
              Șterge
            </button>
          </li>
        ))}
      </ul>
      {produse.length === 0 && <p style={{ color: '#64748b' }}>Nu există produse în listă.</p>}
    </div>
  );
}
