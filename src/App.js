// src/App.js

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 4. Action Creator를 import 합니다.
import { addNumber, minusNumber } from "./redux/modules/counter";

const App = () => {
  // 1. dispatch 선언
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (evnet) => {
    const { value } = evnet.target;
    setNumber(+value);
  };

  // 2. 더하기 버튼을 눌렀을 때 실행할 이벤트 핸들러 만들기
  const onClickAddHandler = () => {
    // 5. Action Creator를 dispatch 해주고 그 때 Action Creator의 인자에 number를 넣어준다.
    dispatch(addNumber(number));
  }
  const onClickMinusHandler = () => {
    // 5. Action Creator를 dispatch 해주고 그 때 Action Creator의 인자에 number를 넣어준다.
    dispatch(minusNumber(number));
  }

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
			{/* 3. 더하기 버튼 이벤트핸들러를 연결해줍니다. */}
      <button onClick={onClickAddHandler}>더하기</button>
      <button onClick={onClickMinusHandler}>빼기</button>
    </div>
  );
};

export default App;