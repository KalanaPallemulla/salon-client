import React, { useEffect } from "react";
import Typed from "react-typed";
import LocationDropDownButton from "../../components/buttons/LocationDropDownButton";
import { useDispatch } from "react-redux";
import { SET_LOCATION, REMOVE_LOCATION } from "../../../actions/type";
import WelcomePageCarosel from "../../components/WelcomePageCarosel/WelcomePageCarosel";
import "../../components/WelcomePageCarosel/WelcomePageCarosel";

export default function Welcome({ Location, setlocation }) {
  const dispatch = useDispatch();
  console.log(Location);

  useEffect(() => {
    if (Location !== "") {
      dispatch({
        type: SET_LOCATION,
        payload: Location,
      });
    }
  }, [Location]);

  return (
    <div className="md:flex md:h-screen  md:mr-0 mr-10 w-full h-96">
      <div className="md:flex items-center md:pl-16 pl-4 space-x-16">
        <div className="mt-12">
          <h1 className="lg:text-5xl text-sitetheme-blue  font-bold leading-tight text-3xl">
            eCrew Digital Lanka{" "}
          </h1>
          <p className="mt-4 text-lg font-normal text-sitetheme-blue md:w-96">
            <Typed
              strings={[
                "Hello, we’re the eCrew, and we’re ready to serve you!",
              ]}
              typeSpeed={70}
            />
          </p>
          <div className="container flex mx-auto mt-4">
            <div className="flex ">
              <div className="w-full bg-transparent relative inline-flex">
                <LocationDropDownButton
                  Location={Location}
                  setlocation={setlocation}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <!-- Box right --> */}
      <div className="w-full md:mt-36  my-4 h-screen">
        <WelcomePageCarosel />{" "}
      </div>
    </div>
  );
}
