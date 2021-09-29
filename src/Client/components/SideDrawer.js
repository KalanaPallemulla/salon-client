import React from "react";
import { Link } from "react-router-dom";

export default function SideDrawer({ show, click }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <div className="flex min-h-screen">
          <nav className="w-full flex-shrink-0">
            <div className="flex-auto bg-sitetheme-blue h-full">
              <div className="flex flex-col overflow-y-auto">
                <ul className="relative m-0 p-0 list-none h-full">
                  <Link
                    to="/"
                    onClick={click}
                    className="text-white p-4 w-full flex relative shadow-sm justify-start bg-black border-b-2 border-gray-700"
                  >
                    <div className="mr-4 flex-shrink-0 my-auto">
                      <i class="fas fa-home pr-2 mt-1"></i>
                    </div>
                    <div className="flex-auto my-1">
                      <span>Home</span>
                    </div>
                  </Link>
                  <Link
                    to="/login"
                    onClick={click}
                    className=" mt-4 text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"
                  >
                    <div className=" mr-4 my-auto">
                      <i class="fas fa-sign-in-alt pr-2 mt-1 "></i>
                    </div>
                    <div className="flex-auto my-1">
                      <span>Join</span>
                    </div>
                  </Link>

                  <Link
                    to="/aboutUs"
                    onClick={click}
                    className="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"
                  >
                    <div className="mr-4 my-auto">
                      <i class="far fa-address-card pr-2 mt-1"></i>
                    </div>
                    <div className="flex-auto my-1">
                      <span>About Us</span>
                    </div>
                  </Link>

                  <Link
                    to="/contactUs"
                    onClick={click}
                    className="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"
                  >
                    <div className="mr-4 my-auto">
                      <i class="far fa-id-badge pr-2 mt-1"></i>
                    </div>
                    <div className="flex-auto my-1">
                      <span>Conntact Us</span>
                    </div>
                  </Link>
                  <Link
                    to="/cart"
                    onClick={click}
                    className="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"
                  >
                    <div className="mr-4 my-auto">
                      <i class="fas fa-shopping-cart pr-2"></i>
                    </div>
                    <div className="flex-auto my-1">
                      <span>Cart</span>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  );
}
