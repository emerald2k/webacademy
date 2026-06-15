import { useEffect, useState } from 'react';
import './App.css';

function salutUtilizator(nume) {
  return `Salut, ${nume}!`;
}

function verificaVarsta(varsta) {
  if (varsta >= 18) {
    return 'Ai acces la conținutul pentru adulți.';
  }
  return 'Nu ai acces la conținutul pentru adulți.';
}

const calculeazaTVA = (pret) => pret * 0.19;

function calculeazaTotal(pret, cantitate) {
  return pret * cantitate;
}

// function afiseazaProdus(nume, pret) {
//   return (
//     <div>
//       <h3>{nume}</h3>
//       <p>Pret: {pret}</p>
//     </div>
//   );
// }

function ButonCopil({ onSalut }) {
  // Componentă copil care primește funcția ca prop
  return <button onClick={onSalut}>Salută utilizatorul</button>;
}

function Produs({ nume, onSelecteaza }) {
  return (
    <div onClick={() => onSelecteaza(nume)}>
      <h3>{nume}</h3>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [scor, setScor] = useState(0);
  const [nume, setNume] = useState('');
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [utilizatori, setUtilizatori] = useState([]);
  const { numar, creste, reseteaza, scade } = useCounter(); // Utilizarea custom hook-ului

  useEffect(() => {
    async function incarcaUtilizatori() {
      try {
        // Realizarea unei cereri către API pentru a obține lista de utilizatori
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const data = await response.json(); // Conversia răspunsului în format JSON
        setUtilizatori(data); // Actualizarea stării cu lista de utilizatori
      } catch (error) {
        console.error('Eroare la încărcarea utilizatorilor:', error);
      }
    }
    incarcaUtilizatori(); // Apelarea funcției pentru a încărca utilizatorii la montarea componentei
  }, []);

  function afiseazaMesaj() {
    alert('Acesta este un mesaj de test!');
  }

  function afiseazaProdus(nume, pret) {
    return (
      <div>
        <h2>{nume}</h2>
        <h2>Pret: {pret}</h2>
      </div>
    );
  }

  function cresteNumar() {
    setCount(count + 1);
  }

  function cresteScor() {
    setScor(scor + 1);
  }

  function reseteazaScor() {
    setScor(0);
  }

  function schimbaNume(event) {
    setNume(event.target.value);
  }

  function valideazaEmail() {
    if (!email.includes('@')) {
      setError('Email invalid');
      return;
    }

    setError('Email valid');
  }

  const esteLogat = true;

  function afiseazaStatus() {
    if (esteLogat) {
      return <p>Utilizatorul este logat</p>;
    }
    return <p>Utilizatorul nu este logat</p>;
  }
  const produse = [
    { id: 1, nume: 'Produs 1', pret: 100 },
    { id: 2, nume: 'Produs 2', pret: 200 },
    { id: 3, nume: 'Produs 3', pret: 300 },
  ];

  function filtreazaProduseScumpe(listaProduse) {
    return listaProduse.filter((produs) => produs.pret > 150);
  }

  const produseScumpe = filtreazaProduseScumpe(produse);

  function selecteazaProdus(nume) {
    alert(`Ai selectat produsul: ${nume}`);
  }

  function useCounter() {
    // Exemplu de custom hook pentru gestionarea unui contor
    const [numar, setNumar] = useState(0);

    function creste() {
      setNumar(numar + 1);
    }

    function reseteaza() {
      setNumar(0);
    }

    function scade() {
      setNumar(numar - 1);
    }

    return { numar, creste, reseteaza, scade };
  }

  return (
    <>
      <section id="center">
        <h1>{salutUtilizator('John')}</h1>
        <h2>{verificaVarsta(17)}</h2>
        <p>TVA: {calculeazaTVA(100)}</p>
        <p>Total: {calculeazaTotal(100, 2)}</p>
        {afiseazaProdus('Produs 1', 100)}
        <button onClick={afiseazaMesaj}>Afișează mesaj</button>
        <button onClick={cresteNumar}>Crește număr</button>
        <p>Număr: {count}</p>
        <p>Scor: {scor}</p>
        <button onClick={cresteScor}>Crește scor</button>
        <button onClick={reseteazaScor}>Resetează scor</button>
        <input
          type="text"
          placeholder="Introdu numele tău"
          onChange={schimbaNume}
        />
        <h1>{salutUtilizator(nume)}</h1>
        <input
          type="text"
          placeholder="Introdu emailul tău"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={valideazaEmail}>Validează email</button>
        {error && <p>{error}</p>}
        {afiseazaStatus()}
        {produseScumpe.map((produs) => (
          <div key={produs.id}>
            <h3>{produs.nume}</h3>
            <p>Pret: {produs.pret}</p>
          </div>
        ))}
        <ButonCopil onSalut={() => alert(salutUtilizator('Utilizator'))} />
        {/* Transmiterea funcției ca prop către componenta copil */}
        <div>
          <Produs nume="Produs 1" onSelecteaza={selecteazaProdus} />
          <Produs nume="Produs 2" onSelecteaza={selecteazaProdus} />
          <Produs nume="Produs 3" onSelecteaza={selecteazaProdus} />
        </div>
        <div>
          <h2>Utilizatori</h2>
          {utilizatori.map((utilizator) => (
            <div key={utilizator.id}>
              <h3>{utilizator.name}</h3>
              <p>Email: {utilizator.email}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Contor personalizat</h2>
          <p>Număr: {numar}</p>
          <button onClick={creste}>Crește</button>
          <button onClick={reseteaza}>Resetează</button>
          <button onClick={scade}>Scade</button>
        </div>
      </section>
    </>
  );
}

export default App;
