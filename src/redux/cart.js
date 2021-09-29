import {
  ADD_TO_CART,
  RESET_CART,
  REMOVE_FROM_CART,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  CART_UPDATE_SUCCESS,
  CART_UPDATE_FAIL,
} from "../actions/type";

const initialState = {
  cartItems: [],
  cart: [],
  cartLoading: true,
  error: null,
  updateItem: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { payload, type } = action;
  // const values = localStorage.getItem("cart");
  // state.cartItems.push([...state.cartItems, values]);

  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case GET_ALL_CART_SUCCESS:
      return {
        cart: payload,
        cartLoading: false,
        cartItems: [...state.cartItems],
      };
    case CART_UPDATE_FAIL:
    case GET_ALL_CART_FAIL:
      return {
        error: payload,
        cartLoading: false,
        cartItems: [...state.cartItems],
      };
    case CART_UPDATE_SUCCESS:
      return {
        cartLoading: false,
        updateItem: payload,
      };
    default:
      return state;
  }
}
