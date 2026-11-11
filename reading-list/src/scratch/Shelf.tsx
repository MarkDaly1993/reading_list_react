import { useState } from "react";

export default function CreateList() {
  const [items, setItems] = useState(["hi", "Yes", "no"]);
  const addItem = () => {
    setItems((curr) => [...curr, String(curr.length)]);
  };
  return (
    <>
      <button type="button" onClick={() => addItem()}>
        Add to the list
      </button>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
