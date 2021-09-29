import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { addToCart } from "../../../actions/cart";
import SingleService from "../../pages/SingleService";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./style.css";
import placeholderimage from "../../images/logo.png";
import cartAlert from "../homePageSlider/components/Popup/cartAlert";

export default function ServiceCard({ service, setIsBackDrop }) {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(`http://localhost:8000/api/servicesImage/${service._id}`);
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(service._id));
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const handleBackdrop = () => {
    setIsBackDrop(true);
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center ">
        <div className="container">
          <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
            <div className="flex flex-col ">
              <div className="">
                <div className="relative h-62 w-full mb-3">
                  <div className="absolute flex flex-col top-0 right-0 p-3"></div>
                  {image ? (
                    <img
                      src={image}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  ) : (
                    <img
                      src={placeholderimage}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  )}
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <span className="text-sitetheme-blue font-bold whitespace-nowrap mr-3 border-r pr-4 border-sitetheme-blue">
                        {service.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-sitetheme-blue mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sitetheme-blue font-bold whitespace-nowrap mr-3">
                        4.60
                        {/* {service.name} */}
                      </span>
                      <span className="mr-2 text-gray-400">45.6K Ratings</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg mr-2 text-gray-400">
                        {service.price} LKR
                      </h2>
                      {/* <h2 className="text-lg mr-auto text-gray-400 line-through">
                        2500 LKR
                      </h2> */}
                      <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        INSTOCK
                      </div>
                      {/* <div className="flex items-center bg-red-500 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        OUT OF STOCK
                      </div> */}
                    </div>
                  </div>

                  <div className="lg:flex py-2 text-sm text-gray-600">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <ul class="list-disc">
                        {service.features.map((m, index) =>
                          index > 2 ? (
                            index < 2 && (
                              <>
                                {" "}
                                <li>{m}</li> More...{" "}
                              </>
                            )
                          ) : (
                            <li>{m}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-3"></div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-between pt-2">
                    <Popup
                      trigger={
                        <div className="flex flex-between">
                          <button
                            onClick={handleBackdrop}
                            className="no-underline text-sitetheme-blue"
                          >
                            {" "}
                            Vivew More{" "}
                          </button>

                          <svg
                            className="w-5 h-5 mt-4 cursor-pointer text-sitetheme-blue ml-1 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <SingleService
                            close={close}
                            service={service}
                            setIsBackDrop={setIsBackDrop}
                          />
                        </div>
                      )}
                    </Popup>

                    <Popup
                      trigger={
                        <div className="flex flex-between">
                          <button
                            onClick={() => {
                              addToCartHandler();
                              handleBackdrop();
                            }}
                            className="mt-2 transition ease-in duration-300 inline-flex items-center text-sm font-medium md:mb-0 bg-sitetheme-blue px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:text-sitetheme-blue hover:bg-white border hover:border-sitetheme-blue"
                          >
                            <span>Add Cart</span>
                          </button>
                        </div>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                            <button
                              className=" text-gray-300  absolute top-2 right-2"
                              onClick={() => {
                                close();
                                setIsBackDrop(false);
                              }}
                            >
                              {" "}
                              <svg
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            {/* <!--content--> */}
                            <div className="">
                              {/* <!--body--> */}
                              <div className="text-center p-5 flex-auto justify-center">
                                <span className="w-16 h-16 flex items-center text-sitetheme-blue mx-auto mb-8">
                                  <i class="far fa-check-circle fa-5x"></i>
                                </span>
                                <p className="text-sm text-gray-500 px-8">
                                  A new item has been added to your Shopping
                                  Cart. You now have {cartItems.length} items in
                                  your Shopping Cart.
                                </p>
                              </div>
                              {/* <!--footer--> */}
                              <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <button
                                  onClick={goToCart}
                                  className="mb-2 md:mb-0 bg-sitetheme-blue border border-thbg-sitetheme-blue px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-white hover:text-sitetheme-blue hover:border-sitetheme-blue"
                                >
                                  View Shopping Cart{" "}
                                </button>
                                <button
                                  onClick={() => {
                                    close();
                                  }}
                                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border border-sitetheme-blue text-sitetheme-blue rounded-full hover:shadow-lg hover:bg-sitetheme-blue hover:text-white"
                                >
                                  Contnue Shopping{" "}
                                </button>
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
