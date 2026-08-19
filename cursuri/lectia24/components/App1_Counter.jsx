import { useState, useEffect, useCallback } from 'react';

/**
 * Exercițiul 1: Counter cu Hooks (useState, useEffect, useCallback)
 * Demonstrează ciclul de viață al componentelor și memoizarea funcțiilor de callback.
 */
export default function App1_Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`[App1_Counter] Component mounted/updated. Count: ${count}`);
    return () => {
      console.log('[App1_Counter] Cleanup before re-render or unmount');
    };
  }, [count]);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="card">
      <h2>Exercițiul 1: Counter & Lifecycle (useCallback / useEffect)</h2>
      <p>Valoare curentă:</p>
      <h1 style={{ fontSize: '3rem', margin: '10px 0', color: '#2563eb' }}>{count}</h1>
      <div>
        <button onClick={incrementCount}>+ Increment</button>
        <button onClick={decrementCount} className="secondary">- Decrement</button>
        <button onClick={() => setCount(0)} className="danger">Reset</button>
      </div>
    </div>
  );
}
