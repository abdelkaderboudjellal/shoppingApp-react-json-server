import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./CardsPHone";
const ShowProduct = () => {
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
  }, [data]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop1: {
      breakpoint: { max: 1800, min: 1400 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 790 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="h-[400px]  md:px-[5%] grid grid-cols-1 cursor-pointer bg-[#0f0f0f32]">
      <Carousel responsive={responsive}>
        {data.map((item) => {
          return (
            <div key={item.id} className="block mx-2">
              <Cards
                id={item.id}
                title={item.title}
                stock={item.stock}
                rating={item.rating}
                price={item.price}
                thumbnail={item.thumbnail}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ShowProduct;
