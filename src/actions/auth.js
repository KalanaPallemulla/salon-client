import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  REGISTER_SUCCESS,
} from "./type";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:8000/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (value) => async (dispatch) => {
  console.log("hi");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8000/api/login",
      value,
      config
    );
    console.log(res.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8000/api/register",
      formData,
      config
    );
    console.log(res.data.token);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(error);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
