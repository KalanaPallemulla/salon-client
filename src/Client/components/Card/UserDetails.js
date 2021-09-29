import React, { useState } from "react";
import LocationPicker from "react-location-picker";

export default function UserDetails({
  close,
  userValues,
  handleChange,
  handleProceed,
}) {
  const { userName, userEmail, address, city, province, userPhone, location } =
    userValues;

  const [position, setPosition] = useState({
    lat: "",
    lng: "",
  });
  const [addresss, setAddresss] = useState("");

  const defaultPosition = {
    lat: 27.9878,
    lng: 86.925,
  };

  return (
    <div>
      {/* <!-- component --> */}
      <form
        onSubmit={handleProceed}
        className="bg-grey-lighter min-h-screen flex flex-col"
      >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 relative">
          <div className="bg-white px-6 py-8 shadow-md text-black w-full">
            <div className="flex justify-end -mt-6 -mr-4">
              <button
                className=" text-gray-300"
                onClick={() => {
                  //   console.log("modal closed ");
                  close();
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
            </div>
            <h1 className="mb-8 text-3xl text-center">User Details</h1>
            <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="userName"
              placeholder="Full Name"
              value={userName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter Address"
            />
            <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="city"
              value={city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="province"
              value={province}
              onChange={handleChange}
              placeholder="Enter Province"
            />
            <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="userPhone"
              value={userPhone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
            <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="userEmail"
              value={userEmail}
              onChange={handleChange}
              placeholder="Enter Email"
            />
            {/* <input
              type="text"
              className="mb-3 w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-sitetheme-lightblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="location"
              value={location}
              onChange={location}
              placeholder="Enter location"
            /> */}
            <LocationPicker
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "200px" }} />}
              defaultPosition={defaultPosition}
              onChange={({ position, address }) => {
                setPosition(position);
                setAddresss(address);
              }}
            />
            <button
              type="submit"
              className="mb-3 w-full bg-sitetheme-blue text-white hover:text-sitetheme-blue hover:bg-white  hover:border-sitetheme-blue rounded-full border text-base py-1 px-3 leading-8"
            >
              Proceed{" "}
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div> */}
        </div>
      </form>
    </div>
  );
}

//name
//address
//city
//province/
///pphone number
///email
///location
