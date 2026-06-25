import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated');
    return () => {
      console.log('Component will unmount or update');
    };
  }, [count]);

  // hook useCallback
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrementCount = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

function App2() {
  const [nume, setNume] = useState('John Doe');

  return (
    <div>
      <h1>Nume: {nume}</h1>
      <input
        type="text"
        placeholder="Introdu numele"
        value={nume}
        onChange={(e) => setNume(e.target.value)}
      />
      <h2>Salut, {nume}!</h2>
    </div>
  );
}

function App3() {
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [mesaj, setMesaj] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && parola) {
      setMesaj(`Te-ai logat cu succes! Email: ${email}`);
    } else {
      setMesaj('Te rog completează toate câmpurile.');
    }
  };

  return (
    <div>
      <h1>Formular de autentificare</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolă"
          value={parola}
          onChange={(e) => setParola(e.target.value)}
        />
        <button type="submit">Loghează-te</button>
      </form>
      {mesaj && <p>{mesaj}</p>}
    </div>
  );
}

function App4() {
  const [produs, setProdus] = useState('');
  const [produse, setProduse] = useState([]);

  function adaugaProdus() {
    if (produs.trim() !== '') {
      setProduse([...produse, produs]);
      setProdus('');
    }
  }

  function stergeProdus(index) {
    const produseActualizate = produse.filter((_, i) => i !== index);
    setProduse(produseActualizate);
  }

  return (
    <div>
      <h1>Lista de produse</h1>
      <input
        type="text"
        placeholder="Introdu un produs"
        value={produs}
        onChange={(e) => setProdus(e.target.value)}
      />
      <button onClick={adaugaProdus}>Adaugă produs</button>
      <ul>
        {produse.map((p, index) => (
          <li key={index}>
            {p}
            <button onClick={() => stergeProdus(index)}>Șterge</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App5 () {
  const [produse, setProduse] = useState([]);
  const [nume, setNume] = useState("");
  const [pret, setPret] = useState("");
  const [editId, setEditId] = useState(null);

  function salveazaProdus() {
    if (nume.trim() === "" || pret.trim() === "") return;
    if (editId === null) {
      const produsNou = {
        id: Date.now(),
        nume: nume,
        pret: Number(pret)
      };
      setProduse([...produse, produsNou]);
    } else {
      const produseActualizate = produse.map((produs) => {
        if (produs.id === editId) {
          return {
            ...produs,
            nume: nume,
            pret: Number(pret)
          };
        }
        return produs;
      });
      setProduse(produseActualizate);
      setEditId(null);
    }
    setNume("");
    setPret("");
  }
  function editeazaProdus(produs) {
    setNume(produs.nume);
    setPret(String(produs.pret));
    setEditId(produs.id);
  }
  function stergeProdus(id) {
    const produseRamase = produse.filter((produs) => produs.id !== id);
    setProduse(produseRamase);
  }
  return (
<div>
<h2>Administrare produse</h2>
<input
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
<button onClick={salveazaProdus}>
        {editId === null ? "Adaugă produs" : "Salvează modificarea"}
</button>
      {produse.map((produs) => (
<div key={produs.id}>
<h3>{produs.nume}</h3>
<p>{produs.pret} lei</p>
<button onClick={() => editeazaProdus(produs)}>
            Editează
</button>
<button onClick={() => stergeProdus(produs.id)}>
            Șterge
</button>
</div>
      ))}
</div>
  );
}

import { useState } from "react";

export default function App() {

  const [produse, setProduse] = useState([]);

  const [nume, setNume] = useState("");

  const [pret, setPret] = useState("");

  const [editId, setEditId] = useState(null);

  function salveazaProdus() {

    if (nume.trim() === "" || pret.trim() === "") return;

    if (editId === null) {

      const produsNou = {

        id: Date.now(),

        nume: nume,

        pret: Number(pret)

      };

      setProduse([...produse, produsNou]);

    } else {

      const produseActualizate = produse.map((produs) => {

        if (produs.id === editId) {

          return {

            ...produs,

            nume: nume,

            pret: Number(pret)

          };

        }

        return produs;

      });

      setProduse(produseActualizate);

      setEditId(null);

    }

    setNume("");

    setPret("");

  }

  function editeazaProdus(produs) {

    setNume(produs.nume);

    setPret(String(produs.pret));

    setEditId(produs.id);

  }

  function stergeProdus(id) {

    const produseRamase = produse.filter((produs) => produs.id !== id);

    setProduse(produseRamase);

  }

  return (
<div>
<h2>Administrare produse</h2>
<input

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
<button onClick={salveazaProdus}>

        {editId === null ? "Adaugă produs" : "Salvează modificarea"}
</button>

      {produse.map((produs) => (
<div key={produs.id}>
<h3>{produs.nume}</h3>
<p>{produs.pret} lei</p>
<button onClick={() => editeazaProdus(produs)}>

            Editează
</button>
<button onClick={() => stergeProdus(produs.id)}>

            Șterge
</button>
</div>

      ))}
</div>

  );

}
 

const coduriValide = [
  "A1B2C",
  "X7K9L",
  "QW123",
  "BNZ55",
  "RO777",
  "MKT88",
  "PRM22"
];

const premii = [
  "Pungă semințe Banzai",
  "Hanorac Banzai",
  "Voucher 50 lei",
  "Voucher 100 lei",
  "Pachet promoțional",
  "Mai încearcă o dată"
];

function App6() {

  const [participant, setParticipant] = useState({
    nume: "",
    telefon: "",
    email: ""
  });

  const [cod, setCod] = useState("");
  const [coduriFolosite, setCoduriFolosite] = useState([]);
  const [istoric, setIstoric] = useState([]);
  const [mesaj, setMesaj] = useState("");
  const [cautare, setCautare] = useState("");

  function modificaParticipant(event) {
    const { name, value } = event.target;
    setParticipant({
      ...participant,
      [name]: value
    });
  }

  function extragePremiuAleatoriu() {
    const index = Math.floor(Math.random() * premii.length); // Generează un index aleatoriu între 0 și lungimea array-ului de premii
    return premii[index];
  }

  function valideazaFormular() {
    if (participant.nume.trim() === "") {
      setMesaj("Introdu numele participantului.");
      return false;
    }

    if (participant.telefon.trim() === "") {
      setMesaj("Introdu numărul de telefon.");
      return false;
    }

    if (participant.email.trim() === "") {
      setMesaj("Introdu adresa de email.");
      return false;
    }

    if (cod.trim() === "") {

      setMesaj("Introdu codul de pe jeton.");

      return false;

    }

    if (cod.length !== 5) {

      setMesaj("Codul trebuie să aibă exact 5 caractere.");

      return false;

    }

    return true;

  }

  function participaLaConcurs() {

    const codCurat = cod.toUpperCase().trim();

    if (!valideazaFormular()) return;

    if (!coduriValide.includes(codCurat)) {

      setMesaj("Codul introdus nu este valid.");

      return;

    }

    if (coduriFolosite.includes(codCurat)) {

      setMesaj("Acest cod a fost deja folosit.");

      return;

    }

    const premiuCastigat = extragePremiuAleatoriu();

    const participareNoua = {

      id: Date.now(),

      nume: participant.nume,

      telefon: participant.telefon,

      email: participant.email,

      cod: codCurat,

      premiu: premiuCastigat,

      data: new Date().toLocaleString("ro-RO")

    };

    setIstoric([participareNoua, ...istoric]);

    setCoduriFolosite([...coduriFolosite, codCurat]);

    setMesaj(`Felicitări! Premiu: ${premiuCastigat}`);

    setCod("");

  }

  function stergeParticipare(id) {

    const participareGasita = istoric.find((item) => item.id === id);

    if (!participareGasita) return;

    const istoricNou = istoric.filter((item) => item.id !== id);

    const coduriNoi = coduriFolosite.filter(

      (cod) => cod !== participareGasita.cod

    );

    setIstoric(istoricNou);

    setCoduriFolosite(coduriNoi);

    setMesaj("Participarea a fost ștearsă.");

  }

  function reseteazaTot() {

    setParticipant({

      nume: "",

      telefon: "",

      email: ""

    });

    setCod("");

    setCoduriFolosite([]);

    setIstoric([]);

    setMesaj("");

    setCautare("");

  }

  const istoricFiltrat = istoric.filter((item) => {

    const textCautat = cautare.toLowerCase();

    return (

      item.nume.toLowerCase().includes(textCautat) ||

      item.email.toLowerCase().includes(textCautat) ||

      item.telefon.toLowerCase().includes(textCautat) ||

      item.cod.toLowerCase().includes(textCautat) ||

      item.premiu.toLowerCase().includes(textCautat)

    );

  });

  const totalParticipari = istoric.length;

  const totalCastiguri = istoric.filter(

    (item) => item.premiu !== "Mai încearcă o dată"

  ).length;

  const totalNecastigatoare = istoric.filter(

    (item) => item.premiu === "Mai încearcă o dată"

  ).length;

  return (
<div className="app">
<h1>Campanie jetoane</h1>
<p className="subtitlu">

        Mini aplicație React pentru introducerea codurilor promoționale
</p>
<div className="layout">
<section className="card">
<h2>Date participant</h2>
<input

            name="nume"

            placeholder="Nume și prenume"

            value={participant.nume}

            onChange={modificaParticipant}

          />
<input

            name="telefon"

            placeholder="Telefon"

            value={participant.telefon}

            onChange={modificaParticipant}

          />
<input

            name="email"

            placeholder="Email"

            value={participant.email}

            onChange={modificaParticipant}

          />
<input

            placeholder="Cod jeton"

            value={cod}

            maxLength={5}

            onChange={(event) => setCod(event.target.value.toUpperCase())}

          />
<button onClick={participaLaConcurs}>

            Verifică și participă
</button>
<button className="secondary" onClick={reseteazaTot}>

            Resetează aplicația
</button>

          {mesaj && <p className="mesaj">{mesaj}</p>}
</section>
<section className="card">
<h2>Statistici</h2>
<div className="stats">
<div>
<strong>{totalParticipari}</strong>
<span>Participări</span>
</div>
<div>
<strong>{totalCastiguri}</strong>
<span>Câștiguri</span>
</div>
<div>
<strong>{totalNecastigatoare}</strong>
<span>Fără premiu</span>
</div>
</div>
<h3>Coduri folosite</h3>

          {coduriFolosite.length === 0 ? (
<p>Nu există coduri folosite.</p>

          ) : (
<ul>

              {coduriFolosite.map((cod) => (
<li key={cod}>{cod}</li>

              ))}
</ul>

          )}
</section>
</div>
<section className="card">
<h2>Istoric participări</h2>
<input

          placeholder="Caută după nume, telefon, email, cod sau premiu"

          value={cautare}

          onChange={(event) => setCautare(event.target.value)}

        />

        {istoricFiltrat.length === 0 ? (
<p>Nu există participări afișate.</p>

        ) : (
<div className="tabel">
<div className="rand header">
<span>Nume</span>
<span>Telefon</span>
<span>Email</span>
<span>Cod</span>
<span>Premiu</span>
<span>Data</span>
<span>Acțiune</span>
</div>

            {istoricFiltrat.map((item) => (
<div className="rand" key={item.id}>
<span>{item.nume}</span>
<span>{item.telefon}</span>
<span>{item.email}</span>
<span>{item.cod}</span>
<span>{item.premiu}</span>
<span>{item.data}</span>
<span>
<button

                    className="danger"

                    onClick={() => stergeParticipare(item.id)}
>

                    Șterge
</button>
</span>
</div>

            ))}
</div>

        )}
</section>
</div>

  );

}
 
body {

  margin: 0;

  font-family: Arial, sans-serif;

  background: #f3f6f8;

  color: #111;

}

.app {

  max-width: 1200px;

  margin: 0 auto;

  padding: 30px;

}

h1 {

  margin-bottom: 5px;

}

.subtitlu {

  color: #555;

  margin-bottom: 25px;

}

.layout {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;

}

.card {

  background: white;

  padding: 20px;

  border-radius: 14px;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

  margin-bottom: 20px;

}

input {

  width: 100%;

  box-sizing: border-box;

  padding: 12px;

  margin-bottom: 12px;

  border: 1px solid #ccc;

  border-radius: 8px;

  font-size: 15px;

}

button {

  padding: 11px 16px;

  border: none;

  border-radius: 8px;

  background: #111;

  color: white;

  cursor: pointer;

  margin-right: 8px;

  margin-bottom: 8px;

}

button:hover {

  opacity: 0.85;

}

.secondary {

  background: #555;

}

.danger {

  background: #c0392b;

}

.mesaj {

  background: #eef7ff;

  padding: 12px;

  border-radius: 8px;

  margin-top: 12px;

}

.stats {

  display: flex;

  gap: 15px;

}

.stats div {

  flex: 1;

  background: #f3f6f8;

  padding: 15px;

  border-radius: 10px;

  text-align: center;

}

.stats strong {

  display: block;

  font-size: 28px;

}

.stats span {

  color: #555;

}

.tabel {

  overflow-x: auto;

}

.rand {

  display: grid;

  grid-template-columns: 1.2fr 1fr 1.5fr 0.7fr 1.3fr 1.2fr 0.8fr;

  gap: 10px;

  padding: 12px;

  border-bottom: 1px solid #eee;

  align-items: center;

  min-width: 1000px;

}

.header {

  font-weight: bold;

  background: #f3f6f8;

  border-radius: 8px;

}

@media (max-width: 800px) {

  .layout {

    grid-template-columns: 1fr;

  }

  .app {

    padding: 15px;

  }

}
 
