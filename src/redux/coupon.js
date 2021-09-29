import { SUCCESS_COUPON, FAILED_COUPON } from "../actions/type";

const initialState = {
  coupon: null,
  validate: false,
  error: false,
  couponLoading: true,
  number: 0,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case SUCCESS_COUPON:
      return {
        coupon: payload,
        validate: true,
        couponLoading: false,
      };
    case FAILED_COUPON:
      return {
        validate: false,
        error: true,
        couponLoading: false,
        number: state.number + 1,
      };

    default:
      return state;
  }
}
