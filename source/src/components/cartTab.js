import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItem';
import { toggleStatusTab,  clearCart  } from '../stores/cart';
import { FaRegTimesCircle } from "react-icons/fa";
import Ahihi from '../assets/images/giohang1.png';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './cartTab.css';
import CheckOut from './CheckOut';




const CartTab = () => {
    const navigate = useNavigate();

    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);

    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
          dispatch(toggleStatusTab());
    }

    const [cartItems, setCartItems] = useState();
  
    

  // Hàm xoá sạch toàn bộ giỏ hàng
  const handleRemoveAll = () => {
    dispatch(clearCart());
    console.log('Ahihi');
  };
  
    console.log(dispatch);
    
    const handleClick = () => {
      navigate('/CheckOut');
      handleCloseTabCart();
    }

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
        <div className='time'>
        {/* <h2>Cart</h2> */}
        <h2 className='p-5 text-white text-2xl'>Cart</h2>
        <FaRegTimesCircle className='icon' onClick={handleCloseTabCart}/>     
        </div>

        <div className='p-4'>
            {carts.map((item, key) => 
                <CartItem key={key} data={item}/>
            )}
        </div>
        
        <button className='button1' onClick={handleClick} >CHECKOUT</button>
        <button className='button2' onClick={handleRemoveAll}>Remove</button>
        
    </div>
  )
}

export default CartTab;