import { useState } from 'react';

export default function Smoke() {
  const [n, setN] = useState(0);
  return (
    <button className="rounded bg-sky-600 px-3 py-1 text-white" onClick={() => setN(n + 1)}>
      islands work: {n}
    </button>
  );
}
