import { useState } from 'react';

const coduriValide = [
  'A1B2C',
  'X7K9L',
  'QW123',
  'BNZ55',
  'RO777',
  'MKT88',
  'PRM22',
];

const premii = [
  'Pungă semințe Banzai',
  'Hanorac Banzai',
  'Voucher 50 lei',
  'Voucher 100 lei',
  'Pachet promoțional',
  'Mai încearcă o dată',
];

/**
 * Exercițiul 6: Aplicație Campanie Promoțională cu Jetoane / Coduri
 * Demonstrează formulare complexe, validare pe coduri unice, generare de premii, statistici agregate și filtrare / căutare.
 */
export default function App6_PromoCampaign() {
  const [participant, setParticipant] = useState({
    nume: '',
    telefon: '',
    email: '',
  });

  const [cod, setCod] = useState('');
  const [coduriFolosite, setCoduriFolosite] = useState([]);
  const [istoric, setIstoric] = useState([]);
  const [mesaj, setMesaj] = useState('');
  const [mesajTip, setMesajTip] = useState('info');
  const [cautare, setCautare] = useState('');

  function modificaParticipant(event) {
    const { name, value } = event.target;
    setParticipant({
      ...participant,
      [name]: value,
    });
  }

  function extragePremiuAleatoriu() {
    const index = Math.floor(Math.random() * premii.length);
    return premii[index];
  }

  function valideazaFormular() {
    if (participant.nume.trim() === '') {
      setMesaj('Introdu numele participantului.');
      setMesajTip('eroare');
      return false;
    }

    if (participant.telefon.trim() === '') {
      setMesaj('Introdu numărul de telefon.');
      setMesajTip('eroare');
      return false;
    }

    if (participant.email.trim() === '') {
      setMesaj('Introdu adresa de email.');
      setMesajTip('eroare');
      return false;
    }

    if (cod.trim() === '') {
      setMesaj('Introdu codul de pe jeton.');
      setMesajTip('eroare');
      return false;
    }

    if (cod.length !== 5) {
      setMesaj('Codul trebuie să aibă exact 5 caractere.');
      setMesajTip('eroare');
      return false;
    }

    return true;
  }

  function participaLaConcurs() {
    const codCurat = cod.toUpperCase().trim();

    if (!valideazaFormular()) return;

    if (!coduriValide.includes(codCurat)) {
      setMesaj('Codul introdus nu este valid.');
      setMesajTip('eroare');
      return;
    }

    if (coduriFolosite.includes(codCurat)) {
      setMesaj('Acest cod a fost deja folosit.');
      setMesajTip('eroare');
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
      data: new Date().toLocaleString('ro-RO'),
    };

    setIstoric([participareNoua, ...istoric]);
    setCoduriFolosite([...coduriFolosite, codCurat]);
    setMesaj(`🎉 Felicitări! Premiu acordat: ${premiuCastigat}`);
    setMesajTip('succes');
    setCod('');
  }

  function stergeParticipare(id) {
    const participareGasita = istoric.find((item) => item.id === id);
    if (!participareGasita) return;

    const istoricNou = istoric.filter((item) => item.id !== id);
    const coduriNoi = coduriFolosite.filter(
      (c) => c !== participareGasita.cod,
    );

    setIstoric(istoricNou);
    setCoduriFolosite(coduriNoi);
    setMesaj('Participarea a fost ștearsă din istoric.');
    setMesajTip('info');
  }

  function reseteazaTot() {
    setParticipant({
      nume: '',
      telefon: '',
      email: '',
    });
    setCod('');
    setCoduriFolosite([]);
    setIstoric([]);
    setMesaj('');
    setCautare('');
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
    (item) => item.premiu !== 'Mai încearcă o dată',
  ).length;
  const totalNecastigatoare = istoric.filter(
    (item) => item.premiu === 'Mai încearcă o dată',
  ).length;

  return (
    <div>
      <div className="layout">
        <section className="card">
          <h2>Date participant & Validare Jeton</h2>
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
            placeholder="Cod jeton (ex: A1B2C, RO777)"
            value={cod}
            maxLength={5}
            onChange={(event) => setCod(event.target.value.toUpperCase())}
          />
          <div style={{ marginTop: '10px' }}>
            <button onClick={participaLaConcurs}>Verifică și participă</button>
            <button className="secondary" onClick={reseteazaTot}>
              Resetează aplicația
            </button>
          </div>

          {mesaj && (
            <p
              className="mesaj"
              style={{
                backgroundColor:
                  mesajTip === 'succes'
                    ? '#ecfdf5'
                    : mesajTip === 'eroare'
                      ? '#fef2f2'
                      : '#eff6ff',
                color:
                  mesajTip === 'succes'
                    ? '#065f46'
                    : mesajTip === 'eroare'
                      ? '#991b1b'
                      : '#1e40af',
              }}
            >
              {mesaj}
            </p>
          )}
        </section>

        <section className="card">
          <h2>Statistici Campanie</h2>
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
          <h3>Coduri utilizate în sesiune</h3>
          {coduriFolosite.length === 0 ? (
            <p style={{ color: '#64748b' }}>Nu există coduri folosite încă.</p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {coduriFolosite.map((cod) => (
                <span
                  key={cod}
                  style={{
                    backgroundColor: '#e2e8f0',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                  }}
                >
                  {cod}
                </span>
              ))}
            </div>
          )}
        </section>
      </div>

      <section className="card">
        <h2>Istoric participări</h2>
        <input
          placeholder="Caută după nume, telefon, email, cod sau premiu..."
          value={cautare}
          onChange={(event) => setCautare(event.target.value)}
        />

        {istoricFiltrat.length === 0 ? (
          <p style={{ color: '#64748b' }}>Nu există participări de afișat.</p>
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
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                  {item.cod}
                </span>
                <span>{item.premiu}</span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  {item.data}
                </span>
                <span>
                  <button
                    className="danger"
                    onClick={() => stergeParticipare(item.id)}
                    style={{ margin: 0, padding: '5px 10px', fontSize: '12px' }}
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
