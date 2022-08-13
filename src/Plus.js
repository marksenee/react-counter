import React, { useState } from "react";


function Plus() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1)
  }
  return (
    <div>
        {count}
        <button onClick={onClickHandler}>+ {count}</button>
    </div>
  );
}

export default Plus;
