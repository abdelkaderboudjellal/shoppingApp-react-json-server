import React from "react";
import { useState } from "react";
import ListPHoneData from "./ListPHoneData";
const FillterShop = () => {
  const [select, setSelect] = useState("");
  const handelSelect = (e) => {
    const valSelect = e.target.value;
    setSelect(valSelect);
  };

  return (
    <div className=" pt-2 pl-4 w-[100%]">
      <div className="flex w-3/6  my-8 md:ml-[10%]">
        <div className="w-1/3  md:w-2/6 xl:w-1/6  flex space-x-4">
          <select
            onChange={handelSelect}
            id="mySelect"
            className="bg-gray-50  text-gray-900 text-sm   focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          >
            <option selected value="">
              All category 
            </option>
            <option  defaultValue="smartphones">smartphones</option>
            <option defaultValue="laptops">laptops</option>
            <option defaultValue="fragrances">fragrances</option>
            <option defaultValue="skincare">skincare</option>
            <option defaultValue="groceries">groceries</option>
            <option defaultValue="home-decoration">home-decoration</option>
            <option value="sold">Sale</option>
          </select>
        </div>
      </div>
      <div className=" w-full">
        {/* <ListCards category={select} sold={select}   /> */}
        <ListPHoneData category={select} sold={select} />
      </div>
    </div>
  );
};

export default FillterShop;
