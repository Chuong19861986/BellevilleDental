import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Ahihi from '../assets/images/1.png';
import styles from './checkOut.module.css';
import CartItem from './cartItem1';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab,  clearCart  } from '../stores/cart';





const CheckOut = () => {
    
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);

    const [form, setForm] = useState({ name: '', address: '', card: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic xử lý thanh toán
    navigate('/model');
  };

  const handleClick = () => {
    navigate('/model');
  };

  return (
    
    <div>
        
       <div className={styles.container}>
    <div className={styles.checkoutLayout}>

        <div className={styles.returnCart}>

            {/* <a href="/">keep shopping</a> */}
            <h1>List Product in Cart</h1>
            <div className={styles.list}>
                
            <div className='p-4'>
            {carts.map((item, key) => 
                <CartItem key={key} data={item}/>
            )}
        </div>
                

            </div>
        </div>


        <div className={styles.right}>
            <h1>Checkout</h1>

            <div className={styles.form}>
                <div className={styles.group}>
                    <label for={styles.name}>Full Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
    
                <div className={styles.group}>
                    <label for="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone"/>
                </div>
    
                <div class={styles.group}>
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address"/>
                </div>
    
                <div className={styles.group}>
                    <label for="country">Country</label>
                    <select name="country" id="country">
                        <option value="">Choose...</option>
                        <option value="">TPHCM</option>
                        <option value="">HANOI</option>
                        <option value="">HUE</option>
                        <option value="">DANANG</option>                       
                    </select>
                </div>
    
                <div className={styles.group}>
                    <label for="city">City</label>
                    <select name="city" id="city">
                        <option value="">Choose...</option>
                        <option value="">VIETNAM</option>
                        <option value="">THAILAN</option>
                        <option value="">SINGGAPO</option>
                        <option value="">LAO</option>
                    </select>
                </div>
            </div>
            <div className={styles.return}>
                <div className={styles.row}>
                    <div>Total Quantity</div>
                    <div className={styles.totalQuantity}>70</div>
                </div>
                <div className={styles.row}>
                    <div>Total Price</div>
                    <div className={styles.totalPrice}>$900</div>
                </div>
            </div>
            <button className={styles.buttonCheckout} onClick={handleClick}>CHECKOUT</button>
            </div>
    </div>
</div>
    </div>
    
  )
}

export default CheckOut;