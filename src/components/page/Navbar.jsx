import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiAppstore } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
const Navbar = () => {
  const listname = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Shopping ", path: "/Shopping " },
    { id: 3, name: "CONTACT", path: "/CONTACT" },
  ];
  const [outlin, setOutlin] = useState(true);
  const handLeOutlin = () => {
    setOutlin(!outlin);
  };
  return (
    <>
      <nav
        id="header"
        className="hidden  relative  w-[100%] z-10  md:block"
      >
        <div className="flex  justify-between  md:w-[90%] md:mx-[5%]  h-14 py-12 md:px-[4%] items-center  w-[100%]  ">
          <div className="">
            <Link
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              to="/"
            >
              <HiShoppingBag size={25} />
              AEK
            </Link>
          </div>
          <div className=" md:flex md:items-center md:w-auto w-full ">
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 ">
              {listname.map((list) => (
                <li key={list.id} className="">
                  <Link
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    to={list.path}
                  >
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center" id="nav-content">
            <Link
              className="inline-block no-underline hover:text-black"
              to="/LoginPage"
            >
              <BiUser size={25} />
            </Link>

            <a
              className="pl-3 inline-block no-underline hover:text-black"
              href="#"
            >
              <GiShoppingCart size={25} />
            </a>
          </div>
        </div>
      </nav>
      <div className="fixed bg-[#ffffffb4] w-[100%] py-4     z-10 block md:hidden">
        <div className="flex justify-between z-20   ">
          <div
            className={
              outlin
                ? "md:0 ml-2 group flex items-center z-50"
                : " md:0 ml-2 group flex items-center z-50 text-black"
            }
          >
            <HiShoppingBag className="group-hover:text-orange-500" />
            <h1 className="text-lg font-bold group-hover:text-orange-500 ">
              AEK
            </h1>
          </div>

          <ul
            className={
              outlin
                ? " hidden"
                : "  fixed  bg-[#f5f0f0ea] pt-48 -z-10 -mt-24  h-[26000px]  w-[100%]   items-center  flex flex-col  font-medium  text-center "
            }
          >
            {listname.map((list) => (
              <li
                key={list.id}
                className=" py-4  text-xl  border-t border-black z-10 w-[90%]  hover:text-[#F87171] text-black"
              >
                <Link className=" px-4" to={list.path}>
                  {list.name}
                </Link>
              </li>
            ))}
            <div className="w-[90%]  border-t">
              <Link
                to="/LoginPage"
                className=" w-full uppercase text-black tet-xl border-2 border-black my-4 px-2 py-2 rounded-md hover:text-white hover:bg-black "
              >
                login
              </Link>
            </div>
            <div
              className={
                outlin ? " hidden" : " -z-10 absolute pt-[100%]  sm:pt-[80%]  "
              }
            >
              <div className="flex  items-center  ">
                <div className="px-4">
                  <BsFacebook
                    className=" text-gray-600 hover:text-[#2c8eca]"
                    size={28}
                  />
                </div>
                <div className="px-4">
                  <BsInstagram
                    className=" text-gray-600 hover:text-[#c35632]"
                    size={28}
                  />
                </div>
                <div className="px-4">
                  <BsTwitter
                    className=" text-gray-600 hover:text-[#2c8eca]"
                    size={28}
                  />
                </div>
                <div className="px-4">
                  <BsGithub
                    className=" text-gray-600 hover:text-[#2cafa4]"
                    size={28}
                  />
                </div>
              </div>
            </div>
          </ul>
          <div
            onClick={handLeOutlin}
            className=" cursor-pointer transition  duration-700 ease-in-out ml-28"
          >
            {outlin ? (
              <AiOutlineMenu className="h-8 w-8 mr-2" />
            ) : (
              <AiOutlineClose className="h-8 w-8 text-black r-2  " />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
