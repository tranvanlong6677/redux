// Chứa những hàm (actions) để thao tác với biến
import axios from "axios";

import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
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
    listUsers: payload,
  };
};
export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
    payload: [],
  };
};

export const createNewUserRedux = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      let res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });
      console.log(">>> check res", res);
      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUsers());
      }

      // let data = res ? res.data : [];
    } catch (error) {
      dispatch(createUsersError());
    }
  };
};

export const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};
export const createUsersSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};
export const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};
