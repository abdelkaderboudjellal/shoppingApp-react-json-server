import React from "react";
import { useState, useEffect } from "react";
import Cards from "../phoneComponents/CardsPHone";
import { BiLastPage } from "react-icons/bi";
import { BiFirstPage } from "react-icons/bi";
import ReactPaginate from "react-paginate";

const ListPHoneData = (props) => {
  const [data, setData] = useState([]);
  const fetchUserData = () => {
    fetch("http://localhost:9000/products")
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
  /* let [dataFiltering,setDataFiltering] =useState([]) */

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
          /* priceSOLD={item.price-2} */ rating={item.rating}
          brand={item.brand}
        />
      );
    });

  const pageCount = Math.ceil(dataFiltering.length / cardsrPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
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
          previousLinkClassName={"font-bold text-red-800 items-center flex "}
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
  );
};

export default ListPHoneData;
