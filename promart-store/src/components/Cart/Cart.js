import React from 'react';
import CartSelected from './../Cart/CartSelected/CartSelected'
import ProductsSend from './../Cart/ProductsSend/ProductsSend'
import OrderTable from './../Cart/OrderTable/OrderTable'
import './Cart.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'
import {getItemCart} from '../../module/cart-local'



const Cart = () => {

    let history = useHistory()
    const back = ()=>{
        history.push("/products")
    }

    const uniqueValue = () =>{
        if( getItemCart()!==null){
            const resumen = getItemCart().reduce((p,c)=>{ 
                p[c.id] = (p[c.id]  || 0)+c.quantity;
                return p;
            },{})
            
            const resultado = Object.keys(resumen).map(e=>{ 
                const o = {};
                let obj= getItemCart().find(element=>element.id ===parseInt(e))
                if(obj){
                    o.id=obj.id
                    o.price=obj.price
                    o.category=obj.category
                    o.image=obj.image
                    o.title=obj.title
                    o.description = obj.description
                }
                o.quantity = resumen[e];
                return o;
            }) 
               return resultado
        }
            
    }
    
   

    return (
        
        <main>
            <section>
             <div className="icon" onClick={back}><FontAwesomeIcon icon={faArrowLeft} /></div>
            
        <h3>Carrito de compras</h3>
        <div className="order-container">
            <div className="cartSelected-container">
        {uniqueValue()? (uniqueValue().length!==0?uniqueValue().map(cartProduct =>(<CartSelected key={cartProduct.id} cartProduct ={cartProduct} />)):''):'Tu canasta esta vacía, compra algo :)'}
            </div>
        <div className="table-container">
        <OrderTable/>
        <ProductsSend />
        </div>
        </div>

        </section>
        </main>
    )
}

export default Cart