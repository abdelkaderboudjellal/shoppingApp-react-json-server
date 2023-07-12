import React, { useState, useEffect ,useContext} from "react";
import { useParams } from "react-router-dom";
import ProduitSelected from "./ProduitSelected";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
const CardShp = () => {
  const [data, setData] = useState([]);
  const fetchUserData = () => {
    fetch("https://products-jtax.onrender.com/productSelect")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setData(datas);
      });
  };
  /*  const[totalAmount,setTotalAmount]=useState(0) */
  let totalAmount = 0;
  let Total = 0;
  let Subtotal = 0;
  let NewSubtotal = 0;
  let Tax = 0;

  useEffect(() => {
    fetchUserData();
    /* setTotalAmount() */
  }, [data]);
  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg min-w-[420px] w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-auto py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-auto py-3">
                Product
              </th>
              <th scope="col" className="px-auto py-3">
                Qty
              </th>
              <th scope="col" className="px-auto py-3">
                Price
              </th>
              {/*     <th scope="col" className="px-auto py-3">
              Total price
              </th> */}
              <th scope="col" className="px-auto py-3">
                DELET
              </th>
              <th scope="col" className="px-auto py-3">
                Valid Qty
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length < 1 ? (
              <tr>
                <th scope="col" className="px-auto py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="sr-only"></th>
                <th scope="col" className="text-right font-bold text-xl py-3">
                  0 Product
                </th>
                <th scope="col" className="ont-bold text-xl px-2 py-3">
                  Selected
                </th>
               
                <th scope="col" className="px-auto py-3"></th>
              </tr>
              

              
              
              
            ) : (
              data.map((item) => {
                {
                  totalAmount += item.price * item.QTY;
                }
                return (
                  <>
                    <ProduitSelected
                      key={item.id}
                      thumbnail={item.thumbnail}
                      title={item.title}
                      price={item.price}
                    
                      delete={item.id}
                    />
                  </>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center my-6 w-full">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y rounded-3xl  ">
          <div className="flex-1">
            <div className="">
              <div className="p-4 bg-gray-100 rounded-full">
                <h1 className="ml-2 font-bold uppercase">Order Details</h1>
              </div>
              <div className="p-4">
                <div className="flex justify-between border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {(Subtotal = totalAmount * 200)}DA
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    New Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {(NewSubtotal = totalAmount * 200 * 0.98)}DA
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Tax
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {(Tax = totalAmount * 200 * 0.05)}DA
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {(Total = NewSubtotal - Tax)}DA
                  </div>
                </div>
                <a href="#">
                  <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-red-800 rounded-full shadow item-center hover:bg-gray-600 focus:shadow-outline focus:outline-none group">
                    <BsFillCreditCardFill
                      size={25}
                      className="text-gray-100 block group-hover:hidden ease-in duration-300 "
                    />
                    <BsFillCreditCard2FrontFill
                      size={25}
                      className="text-gray-100 hidden group-hover:block ease-in duration-300"
                    />
                    <span className="ml-2 mt-5px text-gray-100 ">
                      Procceed to checkout
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShp;
