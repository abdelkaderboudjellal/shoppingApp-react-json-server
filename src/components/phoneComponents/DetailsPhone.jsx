import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShowProduct from "./ShowProduct";

import { IoIosColorFill } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const DetailsPhone = () => {
  const params = useParams();
  const [item, setItem] = useState({ images: [] });
  const url = "http://localhost:9000/products";
  const [image, setImage] = useState();
  useEffect(() => {
    fetch(`${url}/${params.prodectId}`)
      .then((res) => {
        return res.json();
      })
      .then((prudect) => {
        setItem(prudect);
        setImage(prudect.thumbnail);
      });
  }, [params]);
  const updatedata = () => {
    axios
      .post("http://localhost:9000/productSelect", {
        title: item.title,
        price: item.price,
        rating: item.rating,
        category: item.category,
        thumbnail: item.thumbnail,
        id: item.id,
      })
      .then((data) => {});
  };

  const handelclik = (e) => {
    return setImage(item.images[e.target.dataset.index]);
  };

  return (
    <>
      <div className=" w-full min-w-[520px]  items-center border rounded-3xl py-8">
        <section className="text-gray-700 body-font overflow-hidden bg-white ">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-ful object-cover object-center rounded-xl border-2 "
                src={image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {item.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {item.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <AiFillStar size={20} className=" text-yellow-500" />
                    <AiFillStar size={20} className=" text-yellow-500" />
                    <AiFillStar size={20} className=" text-yellow-500" />
                    <AiFillStar size={20} className=" text-yellow-500" />
                    <AiOutlineStar size={20} className=" text-yellow-500" />

                    <span className="text-gray-600 ml-3">
                      {item.rating} Reviews
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p class="leading-relaxed">{item.description}</p>
                <div class="flex-col ml-6 items-center h-24">
                  <div class="relative flex  justify-around items-center">
                    <h1 className="text-lg font-medium pt-12 text-gray-700">
                      {item.brand}
                    </h1>
                  </div>
                </div>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div class="flex">
                    <span class="mr-3">Color</span>
                    <IoIosColorFill size={28} className="text-green-600" />
                    <IoIosColorFill size={28} className="text-gray-600" />
                    <IoIosColorFill size={28} className="text-red-600" />
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    {item.price * 200}DA
                  </span>
                  <h1 className="ml-auto  text-lg font-medium text-gray-400">
                    stock ({item.stock})
                  </h1>
                  <button
                    onClick={updatedata}
                    class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    buy
                  </button>
                </div>
              </div>
              <div className="flex   w-24 h-18">
                <img
                  onClick={handelclik}
                  data-index={0}
                  className="h-22 w-18 object-contain  mx-2 border border-gray-700 rounded-2xl"
                  src={item.images[0]}
                  alt=""
                  srcset=""
                />
                <img
                  onClick={handelclik}
                  data-index={1}
                  className="h-22 w-18 object-contain mx-2 border border-gray-700 rounded-2xl "
                  src={item.images[1]}
                  alt=""
                  srcset=""
                />
                <img
                  onClick={handelclik}
                  data-index={2}
                  className="h-22 w-18 object-contain  mx-2 border border-gray-700 rounded-2xl"
                  src={item.images[2]}
                  alt=""
                  srcset=""
                />
                <img
                  onClick={handelclik}
                  data-index={3}
                  className="h-22 w-18 object-contain  mx-2 border border-gray-700 rounded-2xl"
                  src={item.images[3]}
                  alt=""
                  srcset=""
                />
                <img
                  onClick={handelclik}
                  data-index={4}
                  className="h-22 w-18 object-contain  mx-2 border border-gray-700 rounded-2xl"
                  src={item.images[4]}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </section>
        <div>
          <ShowProduct />
        </div>
      </div>
    </>
  );
};

export default DetailsPhone;
