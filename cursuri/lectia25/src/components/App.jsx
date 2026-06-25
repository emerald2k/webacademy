import { useState } from 'react';

/* export default function App() {
  const [zar, setZar] = useState(1);

  function aruncaZar() {
    const numar = Math.floor(Math.random() * 6) + 1;
    setZar(numar);
  }

  return (
    <div>
      <h1>Aruncă zarul</h1>
      <p>Rezultat: {zar}</p>
      <button onClick={aruncaZar}>Aruncă</button>
    </div>
  );
} */

/* export default function App() {
  const [culoare, setCuloare] = useState('red');

  function schimbaCuloare() {
    const culori = ['red', 'green', 'blue', 'yellow', 'purple'];
    const index = Math.floor(Math.random() * culori.length);
    setCuloare(culori[index]);
  }

  return (
    <div>
      <h1 style={{ color: culoare }}>Schimbă culoarea {culoare}</h1>
      <button onClick={schimbaCuloare}>Schimbă culoarea</button>
    </div>
  );
}
 */

export default function App() {
  const [reactie, setReactie] = useState('😊');

  return (
    <div>
      <h1>Reacție: {reactie}</h1>
      <button onClick={() => setReactie('😢')}>Sad</button>
      <button onClick={() => setReactie('😡')}>Angry</button>
      <button onClick={() => setReactie('😎')}>Cool</button>
    </div>
  );
}
