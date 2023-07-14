import React from "react";
import { useState, useEffect } from "react";
import Cards from "../phoneComponents/CardsPHone";
import { BiLastPage } from "react-icons/bi";
import { BiFirstPage } from "react-icons/bi";
import ReactPaginate from "react-paginate";

const ListPHoneData = (props) => {
  const [data, setData] = useState([]);
  const fetchUserData = () => {
    fetch("https://products-jtax.onrender.com/products")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setData(datas);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  const [cards, setCards] = useState(data.slice(0, 21));
  const [pageNumber, setPageNumber] = useState(0);
  let dataFiltering = [];

  const datanews = data.map((item) => {
    if (item.category === props.category || props.category === "") {
      return dataFiltering.push(item);
    }
    if (item.stock < 50 && props.sold == "sold") {
      return dataFiltering.push(item);
    }
  });

  const cardsrPerPage = 12;
  const pageVisited = pageNumber * cardsrPerPage;
  const displayCards = dataFiltering
    .slice(pageVisited, pageVisited + cardsrPerPage)
    .map((item) => {
      return (
        <Cards
          key={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          category={item.category}
          description={item.description}
          price={item.price}
          stock={item.stock}
          id={item.id}
          rating={item.rating}
          brand={item.brand}
        />
      );
    });

  const pageCount = Math.ceil(dataFiltering.length / cardsrPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      {data.length==0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-1">
          <div className=" grid  gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ">
            {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 */}
            {displayCards}
          </div>
          <div className="mx-0 lg:mx-[3%] md:max-w-[100%]">
            <ReactPaginate
              previousLabel={<BiFirstPage size={30} />}
              nextLabel={<BiLastPage size={30} />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={" flex justify-center items-center my-8   "}
              previousLinkClassName={
                "font-bold text-red-800 items-center flex "
              }
              nextLinkClassName={"sm:font-bold text-red-800 items-center flex "}
              disabledClassName={"hidden "}
              activeClassName={
                "bg-red-800  py-2 border-2 font-bold text-white border-red-800 rounded-xl "
              }
              pageLinkClassName={
                "px-1 text-sm px-3 mx-2 font-bold  py-2 border-2 border-red-800 rounded-xl"
              }
            />
          </div>
        </div>
      )} 
    </>
  );
};

export default ListPHoneData;
