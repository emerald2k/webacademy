import { useState } from 'react';

/**
 * Exercițiul 2: Componentă Controlată (Controlled Input)
 * Demonstrează legarea în timp real a stării locale la valoarea unui input.
 */
export default function App2_ControlledInput() {
  const [nume, setNume] = useState('John Doe');

  return (
    <div className="card">
      <h2>Exercițiul 2: Form Input Controlat</h2>
      <p>Introdu numele tău mai jos pentru a vedea actualizarea stării în timp real:</p>
      <input
        type="text"
        placeholder="Introdu numele"
        value={nume}
        onChange={(e) => setNume(e.target.value)}
      />
      <h3 style={{ color: '#16a34a', marginTop: '15px' }}>
        Salut, {nume.trim() ? nume : 'prietene'}! 👋
      </h3>
    </div>
  );
}
