import { SUCCESS_COUPON, FAILED_COUPON } from "./type";
import axios from "axios";

export const getCouponByName = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/coupon/${name}`);

    console.log("RES", res);

    dispatch({
      type: SUCCESS_COUPON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FAILED_COUPON,
    });
  }
};
