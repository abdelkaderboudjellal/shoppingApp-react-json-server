import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";

const Footer = () => {
  const listname = [
    { id: 1, name: "Shopping", path: "/Shopping" },
    { id: 2, name: "Home", path: "/" },
    { id: 3, name: "CONTACT", path: "/CONTACT" },
  ];
  return (
    <div className="bg-[#000000] text-white py-14 px-8 min-w-[520px] w-[100%]">
      <div className="flex justify-between">
        <div className=" md:flex md:items-center ">
          <div className="">
            <Link
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-white text-xl  "
              to="/"
            >
              <HiShoppingBag size={25} />
              AEK
            </Link>
          </div>
          <ul className=" md:flex  items-center ">
            {listname.map((list) => (
              <li
                key={list.id}
                className=" px-2 flex text-xl   hover:text-[#F87171] items-center"
              >
                <Link className="flex px-4 py-2" to={list.path}>
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  items-center  ">
          <div className="px-4">
            <BsFacebook className=" text-white hover:text-[#2c8eca]" />
          </div>
          <div className="px-4">
            <BsInstagram className=" text-white hover:text-[#c35632]" />
          </div>
          <div className="px-4">
            <BsTwitter className=" text-white hover:text-[#2c8eca]" />
          </div>
          <div className="px-4">
            <BsGithub className=" text-white hover:text-[#2cafa4]" />
          </div>
        </div>
      </div>
      <div className=" p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 px-2 dark:text-neutral-400"
          href="mailto:kaderboudj94@gmail.com"
        >
          Abdelkader Boudjellal
        </a>
      </div>
    </div>
  );
};

export default Footer;
