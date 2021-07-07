import React, {useState, useEffect} from 'react';
import CartSelected from './../Cart/CartSelected/CartSelected'
import OrderTable from './../Cart/OrderTable/OrderTable'
import './Cart.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'
import {useStateValue} from './../../module/StateProvider'


const Cart = () => {

    const [{basket}, dispatch]=useStateValue()

    let history = useHistory()
    const back = ()=>{
        history.push("/products")
    }


    return (
        
        <main>
            <section>
             <div className="icon" onClick={back}><FontAwesomeIcon icon={faArrowLeft} /></div>
            
        <h3>Carrito de compras</h3>
        <div className="order-container">
            <div className="cartSelected-container">
        {basket.length!==0?basket.map(cartProduct =>(<CartSelected key={cartProduct.id} cartProduct ={cartProduct} />)):'Tu canasta esta vacía, compra algo :)'}
        </div>
        <div className="table-container">
        <OrderTable/>
        </div>
        </div>

        </section>
        </main>
    )
}

export default Cart