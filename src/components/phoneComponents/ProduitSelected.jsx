import React, { useState, useEffect } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { TbSquareRoundedMinus } from "react-icons/tb";

/* import datacardselect from "./data/CardSelect.json"; */

const ProduitSelected = (props) => {
  const item = props;
  const url = "https://products-jtax.onrender.com/productSelect";
  const [quantity, setQuantity] = useState(1);
  const [tPrice, settPrice] = useState(item.price);
  const handelClickPlus = () => {
    setQuantity(quantity < 3 ? quantity + 1 : quantity);
    setValid(false)
  };
  const handelClickMoins = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
    setValid(false)
  };
  useEffect(() => {
    settPrice(item.price * quantity * 200);
  }, [handelClickMoins, handelClickPlus]);

  const deleteProsuct = () => {
    fetch(`${url}/${item.delete}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
      
      });


  };
  const [newData, setNewData] = useState({
    title: item.title,
    price: item.price,
    category: item.category,
    thumbnail: item.thumbnail,
    QTY: quantity,
   
  });

  const [valid,setValid]=useState(false)
  const UpdateData = (e) => {
    setNewData({
      title: item.title,
      price: item.price,
      category: item.category,
      thumbnail: item.thumbnail,
      id: item.id,
      QTY: quantity,
    });
   
    fetch(`${url}/${item.delete}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
 
      });
      setValid(true)
  };

  return (
    <>

      <tr
        key={item.id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td className="w-32   p-4">
          <img src={item.thumbnail} alt="Apple Watch" />
        </td>
        <td className="px-auto py-4 font-semibold text-gray-900 dark:text-white">
          {item.title}
        </td>
        <td className="px-auto py-4">
          <div className="flex items-center space-x-3">
         
            <TbSquareRoundedMinus
              onClick={handelClickMoins}
              className="text-gray-400  hover:text-red-600 cursor-pointer"
              size={25}
            />
     
            <div>
            
              {quantity}
            </div>
            <TbSquareRoundedPlus
              onClick={handelClickPlus}
              className="text-gray-400  hover:text-green-600 cursor-pointer"
              size={25}
            />
   
          </div>
        </td>
     
        <td className="px-auto py-4 font-semibold text-gray-900 dark:text-white">
          {tPrice} DA
        </td>
        <td className="px-6 py-4">
          <div>
          <AiTwotoneDelete
            size={28}
            onClick={deleteProsuct}
            href="#"
            className="font-medium cursor-pointer text-gray-600 hover:text-red-600 dark:text-red-500 hover:underline"
          />
          </div>
        </td>
        <td className="px-6 py-4">
          <div className=" group ">
            {!valid?<BsFillPatchExclamationFill
              size={28}
            onClick={UpdateData}
              href="#"
              className="font-medium cursor-pointer  text-red-600 dark:text-red-500 hover:underline"
            />:            <BsPatchCheckFill
            size={28}
            onClick={UpdateData}
            href="#"
            className="font-medium cursor-pointer    text-green-600 dark:text-red-500 hover:underline"
          />}
            

          </div>
        </td>
      </tr>

    </>
  );
};

export default ProduitSelected;


