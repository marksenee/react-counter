// src/App.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();

	// 👇 코드 추가
  const number = useSelector((state) => state.counter.number); 

  console.log(number); // 콘솔 추가
  return (
    <div>
			{/* 👇 코드 추가 */}
      {number}
      <button
        onClick={() => {
          dispatch(plusOne()); // 액션 객체를 Action Creator로 변경 
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne()); // 액션 객체를 Action Creator로 변경 
        }}
      >-1</button>
    </div>
  );
};

export default App;