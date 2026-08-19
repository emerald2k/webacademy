import { useState } from 'react';

/**
 * Exercițiul 3: Formular de Autentificare & Validare de bază
 * Demonstrează manipularea evenimentului onSubmit și feedback-ul vizual pentru utilizator.
 */
export default function App3_AuthForm() {
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [mesaj, setMesaj] = useState('');
  const [esteSucces, setEsteSucces] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && parola.trim()) {
      setMesaj(`Te-ai autentificat cu succes! Cont: ${email}`);
      setEsteSucces(true);
    } else {
      setMesaj('Te rugăm să completezi toate câmpurile obligatorii.');
      setEsteSucces(false);
    }
  };

  return (
    <div className="card">
      <h2>Exercițiul 3: Formular de Autentificare</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresă Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolă"
          value={parola}
          onChange={(e) => setParola(e.target.value)}
        />
        <button type="submit">Autentificare</button>
      </form>
      {mesaj && (
        <div
          className="mesaj"
          style={{
            backgroundColor: esteSucces ? '#ecfdf5' : '#fef2f2',
            color: esteSucces ? '#065f46' : '#991b1b',
            border: `1px solid ${esteSucces ? '#a7f3d0' : '#fecaca'}`,
          }}
        >
          {mesaj}
        </div>
      )}
    </div>
  );
}
