import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../AdminNav";

export default function Login() {
  return (
    <div>
      <AdminNav />
      <div className="md:px-40 sm:px-20 px-10">
        <div className="flex h-screen ">
          <div className="m-auto">
            <div className="border border-gray-200 rounded-lg">
              <div className="md:grid md:grid-cols-3">
                <div className="md:col-span-1 md:border-r border-gray-200 border-r-0 p-6 bg-gradient-to-r  rounded-t-md from-purple-400 via-pink-500 to-red-500 ">
                  <h1 className="text-xl text-white">
                    Hey.. Admin, Let's login
                  </h1>
                  <h1 className="text-md text-white mt-4">
                    You can shear your knowledge with others and gain some
                    knowledge{" "}
                  </h1>
                </div>
                <div className="md:col-span-2 p-6 ">
                  <h1 className="text-2xl text-gray-700 ">Admin Login</h1>
                  <div className="space-y-4">
                    <div className="flex flex-col mt-4">
                      <label className="text-sm text-gray-600">Username</label>
                      <input className="py-2 px-2 border rounded-md border-gray-200  " />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-600">Password</label>
                      <input className="py-2 px-2 border rounded-md border-gray-200  " />
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <button className="py-2 px-4 border border-red-300 rounded-md hover:bg-red-500 hover:text-white text-gray-600 text-md">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
