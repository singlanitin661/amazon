import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
       <div className="checkout__left">
        <img className='checkout__ad' src="https://www.india.com/wp-content/uploads/2017/07/amazon-1.png" alt="error" />
       <div>
        <h2 className='checkout__title'>Your Shopping Basket

        </h2>
       </div>
       
       </div>
       <div className='checkout__right'>
        <Subtotal/>
        
       </div>
    </div>
  )
}

export default Checkout