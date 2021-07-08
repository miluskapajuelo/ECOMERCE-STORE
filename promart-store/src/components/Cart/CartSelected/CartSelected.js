import React, {useState} from 'react';
import accounting from 'accounting';
import './CartSelected.sass'
import {useStateValue} from './../../../module/StateProvider'


const CartSelected = ({cartProduct}) => {

    const [{basket}, dispatch]= useStateValue()
    const [Increments, setCount] = useState(cartProduct.quantity);
    

    
    const removeItem =()=>{
        dispatch({
            type:'remove',
            id: cartProduct})
    }

    const productsSelected ={
        id: cartProduct.id,
        title: cartProduct.title,
        price: cartProduct.price,
        image: cartProduct.image ,
        quantity:1,
        description: cartProduct.description,
        category:cartProduct.category

    }


    const increment=() => {
        setCount(Increments + 1 )
        dispatch({
            type:'update',
            item: productsSelected})
    }

    const reduce=() => {
        setCount(Increments - 1 >= 0 ? Increments - 1 : 0 )
    }

    

    return (
        
       <section className="cart-container">
           <figure className="img-content">
                <img className="img" src={cartProduct.image} alt={cartProduct.title} />
            </figure>
           <div className="description-container">
               <div className="name-product">{cartProduct.title}</div>
               <div className="padding">{cartProduct.category}</div>
               <div className="price-container">
                   <div className="price size">
                       {accounting.formatMoney(cartProduct.price)}
                   </div>
                   <div className="count-container">
                        <button className="buttonSelect" onClick={increment}> + </button> 
                        <div className="counter">{Increments}</div>
                        <button className="buttonSelect"  onClick={reduce}> - </button> 
                   </div>
               </div>
               <button className="buttonRemove"  /* onClick={removeItem} */ >Remover</button>
           </div>
       </section>
    )
}

export default CartSelected
