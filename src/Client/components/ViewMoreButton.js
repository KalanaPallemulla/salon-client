import React from "react";

export default function ViewMoreButton(props) {
  return (
    <div className="flex  mt-10 w-40 justify-center py-3 px-6 bg-pink-500 text-white rounded-full animate-pulse">
      <button className="text-lg text-md ">{props.message}</button>
    </div>
  );
}
