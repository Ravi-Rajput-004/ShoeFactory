import React from 'react'
import { FaInstagram } from "react-icons/fa";
import Footerstyle from '../Pages/Footerstyle';
import { FaSkype } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";




function Footer() {
    return (
        <div className='h-[400px] w-full flex mt-8  '>
            <div className='border-2  bg-sky-900 w-1/3 text-white'>
                <h1 className='text-3xl mr-[80px]'>CUSTOMER SERVICES:-</h1>
                <ul >
                    <Footerstyle data={"Shipping & Delivery"} />
                    <Footerstyle data={"Contact Us"} />
                    <Footerstyle data={"Returns & Exchanges"} />
                    <Footerstyle data={"Size Guide"} />
                    <Footerstyle data={"Track Order"} />
                </ul>
            </div>


            <div className='flex flex-col justify-between bg-slate-400 w-2/3'>


                <div className='flex w-full justify-center my-2 gap-2  '>
                    <input className=' bg-slate-600 border-none rounded-2xl h-8 w-[75%] p-3 overflow-hidden outline-none mt-11  ' type='text' placeholder='enter your e-mail' />
                    <div className=' rounded-1xl w-[10%] items-center justify-center flex bg-red-600 h-8 rounded-xl item-center mt-11'><span className='mb-[10px] font-bold mt-2'>Subscribe</span></div>
                </div>


                <div className=' flex justify-center  items-center text-3xl my-6 gap-4 mb-8'>


                    <a href='https://www.instagram.com/ravisingh8353?igsh=MTVwbmRwbDlhdHN3dw%3D%3D&utm_source=qr'><FaInstagram /></a>

                    <FaSkype />
                    <a href='https://www.facebook.com/profile.php?id=100014682433219&mibextid=LQQJ4d' ><FaFacebook /></a>
                    <FaGooglePlay />


                </div>

            </div>


        </div>
    )
}

export default Footer;
