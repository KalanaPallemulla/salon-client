import {
  ADD_TO_CART,
  RESET_CART,
  REMOVE_FROM_CART,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
} from "./type";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/service/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      time: data.time,
      location: data.location,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

//Add to database

export const addToDb = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/api/cart", data);
    console.log("Success");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getCart = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/cart");
    dispatch({
      type: GET_ALL_CART_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CART_FAIL,
      payload: error,
    });
  }
};

export const cartInProgress = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:8000/api/cartInProcessing/${id}`
    );
    console.log(res);

    // dispatch({
    //   type: GET_ALL_CART_SUCCESS,
    //   payload: res.data,
    // });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: GET_ALL_CART_FAIL,
    //   payload: error,
    // });
  }
};

export const cartDone = (id) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:8000/api//cartInDone/${id}`);
  } catch (error) {
    console.log(error);
  }
};
