import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../actions/cart";
import BookingDetails from "../../Admin/components/BookingDetails";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { cart, cartLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div className=" grid grid-cols-5 gap-4	h-screen ">
      <div className="flex flex-col border-r border-solid">
        <div className="border-b  p-2 hover:text-white text-sitetheme-blue hover:bg-sitetheme-blue border-t hover:border-white text-center">
          <i class="fas fa-tachometer-alt pr-4"></i>
          Dashboard
        </div>
        <div className="border-b  p-2 hover:text-white text-sitetheme-blue hover:bg-sitetheme-blue text-center">
          <i class="fas fa-tachometer-alt pr-4"></i>
          Dashboard
        </div>
        <div className="border-b  p-2 hover:text-white text-sitetheme-blue hover:bg-sitetheme-blue text-center">
          <i class="fas fa-tachometer-alt pr-4"></i>
          Dashboard
        </div>{" "}
        <div className="border-b  p-2 hover:text-white text-sitetheme-blue hover:bg-sitetheme-blue text-center">
          <i class="fas fa-tachometer-alt pr-4"></i>
          Dashboard
        </div>{" "}
        <div className="border-b  p-2 hover:text-white text-sitetheme-blue hover:bg-sitetheme-blue text-center">
          <i class="fas fa-tachometer-alt pr-4"></i>
          Dashboard
        </div>{" "}
        <div className="border-b  p-2 hover:text-white text-sitetheme-blue hover:bg-sitetheme-blue text-center">
          <i class="fas fa-tachometer-alt pr-4"></i>
          dfdfhdfh
        </div>
      </div>
      <div className="col-span-3">
        {cart.map((c, index) => (
          <BookingDetails index={index} c={c} />
        ))}
      </div>
    </div>
  );
}
