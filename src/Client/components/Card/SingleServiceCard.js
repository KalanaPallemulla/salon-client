import React from "react";
import Popup from "reactjs-popup";

export default function SingleServiceCard() {
  return (
    <div className="border border-solid rounded-lg h-full mx-2">
      <div className="flex flex-col p-2">
        <div className="h-24 w-28 border border-solid rounded-lg">Image</div>
        <div className=" mt-1">
          <div className="text-xs text-sitetheme-blue">Name</div>
        </div>
        <div className="">
          <div className="text-sitetheme-blue"> xxxx LKR</div>
        </div>{" "}
      </div>
    </div>
  );
}
