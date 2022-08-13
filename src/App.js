import React, { useState } from "react";
import Plus from "./Plus";

function App() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1)
  }
  function minusCount() {
    setCount(count - 1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={plusCount}>+ 1</button>
      <button onClick={minusCount}>- 1</button>
    </div>
  );
}

export default App;
