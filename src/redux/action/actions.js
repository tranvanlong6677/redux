// Chứa những hàm (actions) để thao tác với biến
import axios from "axios";

import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: { a1: "Long Tran" },
    payload1: { a2: "LT1" },
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      let res = await axios.get("http://localhost:8080/users/all");
      let data = res ? res.data : [];
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError());
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};
export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
    payload: [],
  };
};
