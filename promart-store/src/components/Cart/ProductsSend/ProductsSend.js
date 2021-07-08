
import React from 'react';
import { getItemCart} from './../../../module/cart-local'
import {postCart} from './../../../services/card'
import './ProductsSend.sass'
import {useHistory} from 'react-router-dom'


const ProductsSend = () => {
    const token = localStorage.getItem('token')
    let history = useHistory()

    const sendProducts = async(products) => {
      try {
        await postCart(token, 1, products);
      }
      catch (err) {
        console.log(err)
      }
    };

  
  const sendProduct = () =>{
    if(getItemCart()!==null){
      const resumen = getItemCart().reduce((p,c)=>{ 
        p[c.id] = (p[c.id]  || 0)+c.quantity;
        return p;
    },{})
  
    const resultado = Object.keys(resumen).map(e=>{ 
      const o = {};
      o.productId = parseInt(e)
      o.quantity = resumen[e];
      return o;
  })
  if(token){
    sendProducts(resultado)
    localStorage.removeItem('cart')
    history.push("/cart")
    alert('enviado con éxito')
    
  } 
  else{
    history.push("/login")
  }
    }
    
} 

  return (
    <div className="button-container">
    <button className="buttonSelect" onClick={sendProduct}>Enviar</button>
    </div>
  )
}

export default ProductsSend