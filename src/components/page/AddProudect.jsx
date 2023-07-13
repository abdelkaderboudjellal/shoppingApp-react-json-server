import React from "react";
import axios from "axios";
import { useState } from "react";
const AddProudect = () => {
  const updatedata = () => {
    axios
      .post("https://products-jtax.onrender.com/products", {
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
