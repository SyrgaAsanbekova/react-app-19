import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CounterSet() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="CounterControls">
      <input type="number" value={number} onChange={({ target }) => setNumber(target.value)} />
      <button onClick={() => dispatch({ type: 'counter/set', payload: number })}>set</button>
    </div>
  );
};

