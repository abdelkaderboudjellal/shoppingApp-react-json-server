import React, { useState } from "react";

import FillterShop from "./FillterShop";
import CardShp from "./CardShp";
import { useEffect } from "react";

const Shoping = () => {
  useEffect(() => {}, []);
  return (
    <div
      id="Shopping"
      className=" md:flex   min-h-[900px]  w-full pt-12 md:pt-0 "
    >
      
      <div className="w-full min-w-[300px] md:w-1/4 border-r col-span-1  rounded-3xl bg-[#c5bfbf31] mt-24 ">
        <h1 className=" font-bold text-gray-700 text-xl p-2 w-full ">
          My Cart
        </h1>
        <div className="w-full  ">
          <CardShp />
        </div>
      </div>
      <div className="w-full md:w-3/4 border-l md:grid-cols-2 xl:col-span-4  ">
        <FillterShop />
      </div>
    </div>
  );
};

export default Shoping;
