import { combineReducers } from "redux";
import auth from "./auth";
import services from "./services";
import location from "./location";
import coupon from "./coupon";
import cart from "./cart";

export default combineReducers({
  auth,
  services,
  location,
  cart,
  coupon,
});
