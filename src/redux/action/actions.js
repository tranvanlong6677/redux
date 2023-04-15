// Chứa những hàm (actions) để thao tác với biến

import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload:{a1:"Long Tran"},
    payload1:{a2:"LT1"},
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
