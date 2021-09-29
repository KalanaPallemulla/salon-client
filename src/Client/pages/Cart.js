import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "./HomePage/Footer";
import Popup from "reactjs-popup";
import Register from "./Register";
import UserDetails from "../components/Card/UserDetails";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import { addToDb, removeFromCart } from "../../actions/cart";
import { getCouponByName } from "../../actions/coupon";

export default function Cart({ close }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { coupon, validate, couponLoading, error, number } = useSelector(
    (state) => state.coupon
  );
  const [couponName, setCouponName] = useState("");
  const [price, setPrice] = useState(0);
  const [dis, setDis] = useState(0);

  const [userValues, setUserValues] = useState({
    userName: "",
    userEmail: "",
    address: "",
    city: "",
    province: "",
    userPhone: "",
  });

  //

  const { userName, userEmail, address, city, province, userProvince } =
    userValues;
  const [location, setLocation] = useState({
    long: "",
    lat: "",
  });
  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };
  // const { long, lat } = location;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getSubTotal = () => {
    return cartItems.reduce((price, item) => item.price + price, 0);
  };

  useEffect(() => {
    if (!validate && !coupon) {
      const value = cartItems.reduce((price, item) => item.price + price, 0);
      setPrice(value);
    }
  }, [validate, cartItems]);

  useEffect(() => {
    if (cartItems.length > 0 && coupon) {
      let value = cartItems.reduce((price, item) => item.price + price, 0);
      let dis = value - value * coupon.discount * 0.01;
      setPrice(dis);
      setDis(value * coupon.discount * 0.01);
      console.log("Price", dis);
    }
  }, [cartItems, couponName, coupon]);

  // useEffect(() => {
  //   if (coupon) {
  //     let value = price * coupon * 0.01;
  //     console.log("Discount", value);
  //     setPrice(value);
  //   }
  // }, [coupon, cartItems]);

  const handleCoupon = (e) => {
    e.preventDefault();
    dispatch(getCouponByName(couponName));
  };

  useEffect(() => {
    if (!validate) setDis(0);
  }, [number]);

  const handleProceed = (e) => {
    e.preventDefault();
    const data = { userValues, location, price, cartItems };
    dispatch(addToDb(data));
    setTimeout(() => {
      window.location.reload(10);
    }, 2000);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        long: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
    console.log("LOCATION", location);
  }, []);

  return (
    <div className="md:relative lg:relative ">
      <div
        className=" relative text-center w-full object-cover h-80 block mx-auto  sm:block sm:w-full"
        style={{
          backgroundImage: `url("https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/01/1452119085-woman-getting-hair-cut.jpg")`,
        }}
      >
        <div className=" content-center flex h-full">
          <div className=" m-auto">
            {" "}
            <h1 className="text-4xl text-white font-bold ">Bookings</h1>
            <h1 className="text-2xl text-white  ">Add decription here </h1>
          </div>
        </div>
      </div>
      {/* cart start */}
      <div className="flex justify-center md:absolute md:top-72 md:left-36 lg:absolute lg:top-72 lg:left-36 lg:pb-40 md:pb-40">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white rounded overflow-hidden shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Package Name</th>
                  <th className="text-right">Time</th>
                  <th className="text-right">Location</th>
                  <th className="text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length <= 0 || cartItems == null ? (
                  <tr>
                    <td>No services added</td>
                  </tr>
                ) : (
                  cartItems.map((c) => (
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src={`http://localhost:8000/api/servicesImage/${c.product}`}
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <p className="mb-2 md:ml-4">{c.name}</p>
                          <button
                            type="submit"
                            className="text-gray-700 md:ml-4"
                            onClick={() => removeFromCartHandler(c.product)}
                          >
                            <small>(Remove item)</small>
                          </button>
                        </a>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          {c.time}
                        </span>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          {c.location}
                        </span>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          {c.price}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {/* <hr className="pb-6 mt-6"> */}
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div className="justify-center md:flex">
                    <div className="flex items-center w-full h-13 pl-3 bg-blue-50 rounded-full">
                      <input
                        type="coupon"
                        name="couponName"
                        id="coupon"
                        placeholder="Apply coupon"
                        value={couponName}
                        onChange={(e) => setCouponName(e.target.value)}
                        className="w-full outline-none appearance-none focus:outline-none active:outline-none bg-blue-50"
                      />
                      <button
                        // onSubmit={(e) => {
                        //   // e.preventDefault();
                        //   handleCoupon(coupon);
                        // }}
                        onClick={handleCoupon}
                      >
                        Submit
                      </button>
                      {/* <button
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleCoupon(coupon);
                        }}
                        className="  text-sm flex items-center px-3 py-1 text-white bg-sitetheme-blue rounded-full outline-none md:px-4 hover:bg-white hover:text-sitetheme-blue border border-sitetheme-blue focus:outline-none active:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="gift"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          />
                        </svg>
                        <span className="font-medium">Apply coupon</span>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="p-4 mt-6">
                  {/* <h1 className="ml-2 font-bold uppercase">
                    Instruction for seller
                  </h1> */}
                  <form className="w-full" noValidate>
                    <TextField
                      id="time"
                      label="Add Your Time Here"
                      type="time"
                      defaultValue="09:30"
                      className="w-full"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </form>
                </div>
                <div className="p-4">
                  <form className="w-full" noValidate>
                    <TextField
                      id="date"
                      label="Select your Date Here"
                      type="date"
                      defaultValue="2019-05-24"
                      className="w-full"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </div>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">
                    Shipping and additionnal costs are calculated based on
                    values you have entered
                  </p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      Rs.{getSubTotal().toFixed(2)}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                      <form action="" method="POST">
                        <button type="submit" className="mr-2 mt-1 lg:mt-2">
                          <svg
                            aria-hidden="true"
                            data-prefix="far"
                            data-icon="trash-alt"
                            className="w-4 text-red-600 hover:text-red-800"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                            />
                          </svg>
                        </button>
                      </form>
                      Coupon "90off"
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                      -133,944.77€
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Discount
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      Rs.{dis.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tax
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      Rs.0.00
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      Rs.
                      {coupon && coupon.discount != null
                        ? price.toFixed(2)
                        : getSubTotal().toFixed(2)}
                    </div>
                  </div>

                  <Popup
                    trigger={
                      // <button className="button">Procceed to checkout </button>
                      <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-sitetheme-blue rounded-full shadow item-center hover:bg-white hover:text-sitetheme-blue border border-sitetheme-blue focus:shadow-outline focus:outline-none">
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="credit-card"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                          />
                        </svg>
                        <span className="ml-2 mt-5px">
                          Procceed to checkout
                        </span>
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <UserDetails
                        close={close}
                        userValues={userValues}
                        handleChange={handleChange}
                        location={location}
                        handleProceed={handleProceed}
                      />
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
