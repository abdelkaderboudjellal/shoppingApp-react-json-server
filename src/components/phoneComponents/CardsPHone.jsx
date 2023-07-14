import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CgMoreVerticalR } from "react-icons/cg";
import data from "./data/CardSelect.json";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import axios from "axios";

const CardsPHone = (props) => {
  const navigate = useNavigate();
  const [bdd, setBdd] = useState(data);
  const [show, setShow] = useState(false);
  const handlClick = () => {
    setShow(!show);
  };
  let dataPhone = props;
  const updatedata = () => {
    axios
      .post("https://products-jtax.onrender.com/productSelect", {
        title: dataPhone.title,
        price: dataPhone.price,
        category: dataPhone.category,
        thumbnail: dataPhone.thumbnail,
        id: dataPhone.id,
        QTY: 1,
      })
      .then((data) => {});
  };
  return (
    <div className="relative sm: P-4   md:h-96 md:w-60  flex flex-col items-center rounded-xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 cursor-pointer  group">
      <div className="relative sm:  P-4  h-96 w-60  flex flex-col rounded-xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 cursor-pointer  group ">
        <div
          className={
            dataPhone.stock < 50
              ? "absolute  flex justify-center items-center rounded-br-3xl rounded-tl-xl   bg-red-800 w-1/2 rounded-ful "
              : "hidden"
          }
        >
          <h1 className="px-2 font-bold text-[#ece4e4] ">SALE</h1>
          <SiShopify className="text-[#ebe3e3] " />
        </div>
        <div
          onClick={() => {
            navigate(`/Shopping/${dataPhone.id}`);
          }}
          className=" h-[65%] w-full"
        >
          <img
            className=" h-full w-full rounded-xl object-cover     "
            src={dataPhone.thumbnail}
            alt=""
            srcSet=""
          />
        </div>
        <div className=" relative p- h-[35%] grid bg-[#fff] w-full rounded-b-xl   items-center  ">
          <div className="flex items-center justify-between mx-1">
            <p className=" font-medium text-[#494646]  text-xs md:text-sm text-left pl-2 ">
              {dataPhone.title}
            </p>

            <div className="group inline-block">
              <button className="outline-none focus:outline-none   px-3 py-1  flex items-center ">
                <span className="pr-1 font-semibold flex-1">
                  <CgMoreVerticalR
                    onClick={handlClick}
                    className=" text-gray-700"
                    size={20}
                  />
                </span>
                <span></span>
              </button>
              <ul
                className={
                  !show
                    ? "hidden "
                    : "bg-white border rounded-lg transform scale-100 absolute transition duration-150 ease-in-out origin-top w-24 -ml-16 "
                }
              >
                <button
                  className="rounded-sm  px-3 py-1 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    navigate(`/Shopping/${dataPhone.id}`);
                  }}
                >
                  Show more
                </button>
              </ul>
            </div>
          </div>

          <div className="flex justify-around items-center">
            <h1 className=" text-gray-600 text-left text-base md:text-sm  pl-2">
              {dataPhone.category}
            </h1>
            <h1 className=" text-gray-600 text-left text-base md:text-sm  pl-2">
              {dataPhone.brand}
            </h1>
          </div>
          
          <div className="text-yellow-600 flex justify-center items-center dark:text-yellow-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current dark:stroke-indigo-500"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              {dataPhone.rating}
              <span className="px-4 text-slate-600 font-normal text-sm md:text-base">
                Stock ( {dataPhone.stock} )
              </span>
            </span>
          </div>

          <div className="flex justify-around items-center ">
            <h1
              className={
                dataPhone.stock < 50 ? " font-bold text-red-800" : "hidden"
              }
            >
              {" "}
              {(dataPhone.price * 0.9 * 200).toFixed(2)} DA
            </h1>
            <h1
              className={
                dataPhone.stock < 50
                  ? " px-2 font-bold text-lg line-through "
                  : "  font-bold text-red-800"
              }
            >
              {" "}
              {dataPhone.price * 200} DA
            </h1>
            <button
              onClick={updatedata}
              type="button"
              className="text-white bg-red-800 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <BsFillCartPlusFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPHone;
