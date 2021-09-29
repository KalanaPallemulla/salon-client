import { SET_LOCATION, REMOVE_LOCATION } from "../actions/type";

const initialState = {
  location: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case SET_LOCATION:
      return {
        location: payload,
      };
    case REMOVE_LOCATION:
      return {
        location: null,
      };
    default:
      return state;
  }
}
