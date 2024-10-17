import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartItems } from "../Pages/json";
import { useCart  } from "../Context/Cart";
// import { Toast } from "bootstrap";
import Navbar from "../Commonets/Navbar";
const ShippingDelivery = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log('id', id);
    // console.log('cartItems', cartItems);


    const [cart,setcart]= useCart();

    const filterData = cartItems.filter((data) => data.id == id);
    console.log('filterData', filterData)

    return (
        <div>
            <Navbar />
            {filterData.map((data, index) => (

                <div key={index} className="h-[400px] w-[80%] slate-800  offset-sm-1 grid grid-cols-2 gap-[10px] mt-8 border-[2px]	">

                    <div className="h-[380px] m-[7px] rounded-xl border-2 shadow-2xl bg-slate-100">

                        <div className="h-[260px] w-[70%] black m-[60px] py-2 justify-center  ">
                            <img
                                className="w-FULL h-full   rounded-lg "
                                src={data?.img}
                            />
                        </div>
                    </div>


                    <div className="bgslate-500">
                        <div>
                            <p className="text-5xl font-extrabold ml-5 mt-1">{data?.title} </p>
                            <ul className="m-8 font-medium list-disc ">
                                <li>COMFORTABLE SHOE.</li>
                                <li>BEST PRICE.</li>
                                <li>EASY TO EXCHANGE IN 7 DAYS.</li>
                                <li>ALL SIZES ARE AVAILABLE.</li>
                                <li>FAST DELIVERY.</li>
                            </ul>
                        </div>

                        {/* <button
                            onClick={() => navigate("/Customerdetails")}
                            className="btn btn-primary offset-sm-5 mt-[110px] "
                        >
                            Add to cart
                        </button> */}
                            <button  
                             className="btn btn-primary offset-sm-5 mt-[110px] "
                            onClick={()=>{setcart([...cart,data]);
                                // Toast.success('item added to cart')
                            }}
                    
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShippingDelivery;
