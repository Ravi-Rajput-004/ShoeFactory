import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Commonets/Navbar";
import Footer from "../Commonets/Footer";
import { useNavigate } from 'react-router-dom';
import { cartItems } from "./json";
import { SearchContext } from "../Context/Search";


function Collection() {

  const [search] = useContext(SearchContext);


  const [data, setdata] = useState(cartItems);

  const navigate = useNavigate();
  const handleSingleData = (singleItem) => {
    navigate(`/ShippingDelivery/${singleItem.id}`)
  }
  const handletoggle = (ITEMS) => {
    const filterData = cartItems.filter((curitem) => curitem.gender === ITEMS);
    setdata(filterData);
    console.log(filterData);

  }
  const newsearch = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())

  )



  return (
    <div className="flex flex-col justify-around">
      <Navbar />
      <div className="flex ">
        <div className=" p-2   w-[18%]">
          <p className="text-3xl font-serif font-bold ">Filter Data:-</p>
          <p onClick={() => handletoggle('Male')} className="text-2xl  mt-3 ml-3 font-serif">Boys</p>
          <p onClick={() => handletoggle('female')} className="text-2xl  ml-3 font-serif" >Girls</p>
          <p onClick={() => handletoggle('kids')} className="text-2xl  ml-3 font-serif" >Kids</p>
        </div>
        <div className="flex justify-evenly flex-wrap gap-[10px] w-[82%]  ml-[10px] ">

          {newsearch.map((data, index) => (
            <div key={index} className="h-[250px] w-[20%] bg-black mt-6 flex flex-col items-center">
              <div className="h-[170px] w-full bg-gray-400 bg-cover">
                <img className="w-full h-full" src={data?.img} />
              </div>
              <div className="h-[25px] w-full bg-slate-600 py-[2px] flex justify-between px-3">
                <p>Rs.{data?.rate}</p>
                <div className="text-black">
                  <p className="text-black h-full w-full text-center">
                    Rs.{data?.discount}
                  </p>
                  <div className="w-full h-[1px] bg-black mt-[-10px]"></div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[95%] py-2 bg-red-800 m-[9px]">
                <button
                  onClick={() => handleSingleData(data)}
                  className="font-bold text-1xl"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collection;
