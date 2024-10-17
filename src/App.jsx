import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/Collection'

import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Collection from './Pages/Collection';
import ShippingDelivery from './ordertrack/Shipping';
import Customerdetails from './ordertrack/Customerdetails';
import Cartpage from './Pages/Cartpage';



function App() {


  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path='cartpage' element={<Cartpage />} />

        <Route path="/register" element={< SignUp />} />


        <Route path="/ShippingDelivery/:id" element={<ShippingDelivery />} />

        <Route path="Customerdetails" element={<Customerdetails />} />


      </Routes>


    </div>

  );
}

export default App





// use filter 
// use param
// navigate 