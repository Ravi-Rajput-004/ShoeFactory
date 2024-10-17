// import React from 'react'
// import Navbar  from '../Commonets/Navbar'
// import { cartItems } from './json'

// const Cartpage = () => {
//   return (
//     <div>
//     <Navbar />
//     <div className='  w-[60%] mx-auto rounded-lg mt-[10px] '>
//         <div className='row '>
//             <div className='col-md-9 card '> 
//                 {cartItems.length>0? (
            
//                 cartItems?.map( (data) =>(
//                     <div className='row mb-2 border-[10px] '>
//                         <div className='col-md-4 mb-2 mt-2 h-[140px]  '>  <img className="w-full h-full " src={data?.img} />
//                         </div>
//                         <div className='col-md-8'>
//                            <p className='text-2xl font-bold'>{data.title}</p> 
//                            <p className='font-bold text-[20px]'>Price:-{data.rate}</p>
//                         </div>

//                     </div>
//                 ))
//   ) 
//           </div>
//             <div className='col-md-3'>Checkout|Payment</div>


//         </div>
      
//     </div>
//     </div>

//   )
// }


// export default Cartpage



import React from 'react';
import Navbar from '../Commonets/Navbar';
import { useCart } from '../Context/Cart';

const Cartpage = () => {
    const [cart, setCart] = useCart(); // Get cart and setCart from the context

    // Function to remove the first occurrence of a specific item from the cart
    const removeFromCart = (itemToRemove) => {
        const itemIndex = cart.indexOf(itemToRemove);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(itemIndex, 1); // Remove the item at the found index
            setCart(updatedCart); // Update the cart state
        }
    };

    return (
        <div>
            <Navbar />
            <div className='w-[60%] mx-auto rounded-lg mt-[10px]'>
                <div className='row'>
                    <div className='col-md-9 card'>
                        {cart.length > 0 ? (
                            cart.map((data, index) => (
                                <div key={index} className='row mb-2 border-[10px]'>
                                    <div className='col-md-4 mb-2 mt-2 h-[140px]'>
                                        <img className='w-full h-full' src={data?.img} alt={data?.title} />
                                    </div>
                                    <div className='col-md-8'>
                                        <p className='text-2xl font-bold'>{data.title}</p>
                                        <p className='font-bold text-[20px]'>Price: {data.rate}</p>
                                        <button
                                            className='btn btn-danger mt-2'
                                            onClick={() => removeFromCart(data)} // Call remove function
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center font-bold">Your cart is empty!</p>
                        )}
                    </div>
                    <div className='col-md-3'>
                        <div className="card p-3">
                            <h4>Checkout</h4>
                            <p>Total Items: {cart.length}</p>
                            <p>Total Price: {cart.reduce((total, item) => total + item.rate, 0)}</p>
                            <button className="btn btn-primary w-full" disabled={cart.length === 0}>
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartpage;

