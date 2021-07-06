import React from 'react';
import accounting from 'accounting';
import './CartSelected.sass'

const CartSelected = ({cartProduct}) => {
    console.log(cartProduct)
    
    return (
        
       <section className="cart-container">
           <figure className="img-content">
                <img src={cartProduct.image} alt={cartProduct.title} width="60%" height="95%" />
            </figure>
           <div className="description-container">
               <div className="name-product">{cartProduct.title}</div>
               <div className="padding">{cartProduct.category}</div>
               <div className="price-container">
                   <div className="price size">
                       {accounting.formatMoney(cartProduct.price)}
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
