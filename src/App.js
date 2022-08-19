import React, { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  // 랜더링 마다 실행됨  
  useEffect(() => {
    console.log("랜더링!")
  }, );

  // 마운팅 + count가 변경할 때마다 실행됨 
  useEffect(() => {
    // 2. 값이 변경됨 
    console.log("count 변화!")

    return () => {
      // clean up ->  새로운 함수를 리턴하도록 함 -> 해당 컴포넌트가 사라질 때 사용하면 됨 
      // 다음 dependency에 의해서 실행될 때 직전에 return을 먼저 시켜주고 2번을 실행시켜 줌..?
      // 1. 이전 count 값을 실행함
      console.log("clean up count: ", count);
    }
  }, [count]);

  // 마운팅 + name이 변경될때마다 실행됨 
  useEffect(() => {
    console.log("name 변화!")
  }, [name]);

  function plusCount() {
    setCount(count + 1)
  }
  function minusCount() {
    setCount(count - 1)
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={plusCount}>+ 1</button>
      <button onClick={minusCount}>- 1</button>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name : {name}</span>
    </div>
  );
}

export default App;
