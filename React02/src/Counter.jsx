import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(false);

  const step = double ? 2 : 1;

  const add = () => {
    if (count < 10) setCount(count + step);
  };

  const subtract = () => {
    if (count > -10) setCount(count - step);
  };

  const reset = () => setCount(0);

  const toggleDouble = () => setDouble(!double);

  return (
    <div>
      <p>Počet: {count}</p>
      <button onClick={add}>Přidat</button>
      <button onClick={subtract}>Odebrat</button>
      <button onClick={reset}>Resetovat</button>
      <button onClick={toggleDouble}>
        {double ? 'Dvojitý mód: Zapnuto' : 'Dvojitý mód: Vypnuto'}
      </button>
    </div>
  );
}

export default Counter;
