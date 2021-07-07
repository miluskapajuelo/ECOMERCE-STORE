import React, {useState} from 'react';
import accounting from 'accounting';
import './CartSelected.sass'
import {useStateValue} from './../../../module/StateProvider'

const CartSelected = ({cartProduct}) => {

    const [{basket}, dispatch]= useStateValue()
 
/*     const [qty, setNumber] = useState(qtty || 0); */
    const removeItem =()=>{
        dispatch({
            type:'remove',
            id: cartProduct})
    }

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
                   {/* <button onClick={()=>setNumber(qty - 1 >= 0 ? qty - 1 : 0 )}> - </button> {qty} <button onClick={()=>setNumber(qty + 1 )}> + </button> 
                   */} </div>
               </div>
               <button className="buttonRemove" /* onClick={removeItem} */>Remover</button>
           </div>
       </section>
    )
}

export default CartSelected
