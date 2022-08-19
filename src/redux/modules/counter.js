// src/modules/counter.js

//Action Value
const ADD_NUMBER = "ADD_NUMBER"; // value는 상수로 생성 
const MINUS_NUMBER = "MINUS_NUMBER"; // value는 상수로 생성 

//Action Creator
// 액션 객체를 반환하는 함수 생성 
// export가 붙는 이유는 plusOne()는 외부에서 사용될 예정이기 때문
export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload // 객체의 Key와 value가 같으면 줄여서 사용할 수 있음 
    };
}

export const minusNumber = (payload) => {
    return {
        type: MINUS_NUMBER,
        payload
    };
}


// Initial State 초기 상태값
const initialState = {
    number: 0,
  };
  
// Reducer
const counter = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
          // PLUS_ONE이라는 case를 추가한다.
          // 여기서 말하는 case란, action.type을 의미한다.
          // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
          // 아래 return 절이 실행된다. 
      case ADD_NUMBER:
        return {
                  // 기존 state에 있던 number에 +1을 더한다.
          number: state.number + action.payload,
        };
        case MINUS_NUMBER:
        return {
                  // 기존 state에 있던 number에 -1을 한다.
          number: state.number - action.payload,
        };
  
      default:
        return state;
    }
  };
  
// export default reducer  
export default counter;