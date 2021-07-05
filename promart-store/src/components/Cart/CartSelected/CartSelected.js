import React from 'react';
import accounting from 'accounting';
import './CartSelected.sass'


const CartSelected = () => {
    

    return (
       <section className="cart-container">
           <div className="img-container">imagen</div>
           <div className="description-container">
               <div className="name-product">Apple watch</div>
               <div className="padding">size 17</div>
               <div className="price-container">
                   <div className="price size">
                       {accounting.formatMoney(140)}
                   </div>
                   <div className="size">
                       - 1 +
                   </div>
               </div>
           </div>
       </section>
    )
}

export default CartSelected
