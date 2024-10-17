import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SearchContext } from '../Context/Search';
import { useCart } from '../Context/Cart';
import {Badge} from 'antd'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useContext(SearchContext);


  const [cart]=useCart();


  const handlesearch = (e) => {
    setSearch(e.target.value)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center bg-gray-700 h-[13vh] px-4 sm:px-8'>
      <div className='flex justify-between w-full sm:w-auto items-center'>
        <div className='text-2xl sm:text-4xl ml-3 text-slate-100'>Shoes Factory</div>
        <button onClick={toggleMenu} className='text-white text-3xl sm:hidden'>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
      <div className={`flex-col items-center  sm:flex-row absolute sm:static top-[12vh] left-0 w-full sm:w-auto bg-gray-700 sm:bg-transparent ${isOpen ? 'flex' : 'hidden'} sm:flex gap-5 text-slate-100 p-0 sm:p-0`}>
        <div className='flex items-center overflow-hidden bg-white h-[40px] w-full  sm:w-[420px] rounded-[14px] my-0 sm:my-0 '>
          <IoMdSearch className=' w-[20%] pl-2 bg-black-400 ' style={{ fontSize: "40px" }} />
          <input value={search} onChange={handlesearch} type='text' placeholder='Search the collections' className='w-[90%] pl-2 outline-none text-black' />
        </div>
        <Link to="/" className='hover:underline '>Home</Link>
        <Link to="/collection" className='hover:underline'>Collections</Link>
        <Link to="/Signup" className='hover:underline'>Signup</Link>
        <Link to="/login" className='hover:underline text-2xl'>
          <FaUserCircle />
        </Link>


        <Badge count={cart?.length} showZero>
        <Link to="/cartpage" className='hover:underline text-2xl flex'>
        <FaCartShopping /> 
        </Link>    </Badge>
        



      </div>
    </div>
  );
}

export default Navbar;





