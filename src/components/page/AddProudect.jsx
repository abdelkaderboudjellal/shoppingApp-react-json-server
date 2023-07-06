import React from "react";
import axios from "axios";
import { useState } from "react";
const AddProudect = () => {
  const updatedata = () => {
    axios
      .post("http://localhost:9000/products", {
        title: title,
        price: price,
        stock: stock,
        category: category,
        description: description,
        thumbnail: thumbnail,
        discountPercentage: 2.92,
        rating: 4.8,
        brand: brand,
        images: [],
      })
      .then((data) => {});
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("smartphones");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [thumbnail, setHumbnail] = useState("");
  console.log({ title, description, category, price, stock, thumbnail });
  const onsabumit = (e) => {
    e.preventDefault();
    updatedata();
    window.location.reload();
  };
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form
            onSubmit={onsabumit}
            className="py-6 px-9"
            /*     action="http://localhost:3000"
            method="POST" */
          >
            <div className="flex justify-between">
              <div className="mb-5">
                <label
                  htmlhtmlFor="title"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Name Product
                </label>
                <input
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  type="name"
                  name="title"
                  id="title"
                  placeholder="title product"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <input
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  type="Description"
                  name="Description"
                  id="Description"
                  placeholder="name product"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="mb-5 ">
              <label
                  htmlFor="Description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                   Category
                </label>
            
                <select
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                  id="mySelect"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option className="" defaultValue="smartphones">
                    smartphones
                  </option>
                  <option className="" defaultValue="laptops">
                    laptops
                  </option>
                  <option className="" defaultValue="fragrances">
                    fragrances
                  </option>
                  <option className="" defaultValue="skincare">
                    skincare
                  </option>
                  <option className="" defaultValue="groceries">
                    groceries
                  </option>
                  <option className="" defaultValue="home-decoration">
                    home-decoration
                  </option>
                  <option className="" value="sold">
                    Sale
                  </option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  brand
                </label>
                <input
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                  type="brand"
                  name="brand"
                  id="brand"
                  placeholder="brand product"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Price of the product
                </label>
                <input
                  onChange={(event) => {
                    setPrice(+event.target.value);
                  }}
                  type="number"
                  name="Price"
                  id="Price"
                  placeholder="Price of the  product"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="stock"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Stock of the product
                </label>
                <input
                  onChange={(event) => {
                    setStock(+event.target.value);
                  }}
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="Stock of the  product"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload File
              </label>
              <div className="mb-5">
                <label
                  htmlFor="Description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  image product
                </label>
                <input
                  onChange={(event) => {
                    setHumbnail(event.target.value);
                  }}
                  type="url"
                  name="thumbnail"
                  id="thumbnail"
                  placeholder="image product"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* <div className="mb-8">
                <input
                  onChange={(event) => {
                    setHumbnail(event.target.value);
                  }}
                  type="file"
                  name="thumbnail"
                  id="thumbnail"
                  className="sr-only"
                />
                <label
                  htmlFor="thumbnail"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div> */}

              {/*  <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
          <div className="flex items-center justify-between">
            <span className="truncate pr-3 text-base font-medium text-[#07074D]">
              banner-design.png
            </span>
            <button className="text-[#07074D]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProudect;
