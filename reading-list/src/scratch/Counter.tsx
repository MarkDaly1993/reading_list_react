import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [word, setWord] = useState("hi");

  function handleReset() {
    setCount(0);
  }
  function increment(increase: number) {
    setCount((c) => c + increase);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setIsOpen((curr) => !curr)}>
        isOpen
      </button>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          console.log(count);
        }}
      >
        Add Two
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <button type="button" onClick={() => increment(5)}>
        Increase by 5
      </button>

      {isOpen && <p>This is a paragraph</p>}
    </div>
  );
}
