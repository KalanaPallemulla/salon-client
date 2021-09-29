import {
  GET_ALL_SERVICES_SUCCESS,
  GET_SERVICE_SUCCESS,
  GET_ALL_SERVICES_ERROR,
  GET_SERVICE_ERROR,
  GET_SUG_SERVICES_SUCCESS,
  GET_SUG_SERVICES_ERROR,
} from "./type";
import axios from "axios";

export const getAllServices = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/services");
    console.log(res);
    dispatch({
      type: GET_ALL_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_SERVICES_ERROR,
      payload: err.message,
    });
  }
};

export const getSugServices = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/suggestServices");
    console.log(res);
    dispatch({
      type: GET_SUG_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SUG_SERVICES_ERROR,
      payload: err.message,
    });
  }
};
