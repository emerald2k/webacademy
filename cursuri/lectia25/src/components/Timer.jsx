import { useEffect, useState } from 'react';

export default function Timer() {
  const [secunde, setSecunde] = useState(0);
  const [pornit, setPornit] = useState(false);

  useEffect(() => {
    let intervalId;
    if (pornit) {
      intervalId = setInterval(() => {
        setSecunde((prevSecunde) => prevSecunde + 1); // Folosim funcția de actualizare pentru a obține valoarea anterioară
      }, 1000);
    }
    return () => {
      clearInterval(intervalId); // Curățăm intervalul când componenta se demontează sau când 'pornit' se schimbă
    };
  }, [pornit]); // Re-executa efectul când 'pornit' se schimbă

  useEffect(() => {
    console.log('Secunde actualizate:', secunde);
  }, [secunde]); // Re-executa efectul când 'secunde' se schimbă

  const incepeTimer = () => {
    setPornit(true);
  };

  const opresteTimer = () => {
    setPornit(false);
  };

  const reseteazaTimer = () => {
    setSecunde(0);
    setPornit(false);
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>Secunde: {secunde}</p>
      <button onClick={incepeTimer}>Începe</button>
      <button onClick={opresteTimer}>Oprește</button>
      <button onClick={reseteazaTimer}>Resetează</button>
    </div>
  );
}
