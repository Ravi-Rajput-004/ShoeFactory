import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { SearchProvider } from './Context/Search.jsx'
import { CartProvider } from './Context/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
         <SearchProvider>
            <CartProvider>
        <BrowserRouter>

            <App />
            </BrowserRouter>
            </CartProvider>

        </SearchProvider>


);
