import React, {useState, useEffect} from 'react';
import CartSelected from './../Cart/CartSelected/CartSelected'
import OrderTable from './../Cart/OrderTable/OrderTable'
import './Cart.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'


const Cart = (props) => {

    const [prodToSend,setProdToSend]= useState([])
    const [totalPriceProduct,setTotalPriceProduct]= useState(0)

     const productSelect = props.location.state.productsCart
     console.log(productSelect)

    const getProductSelected=()=>{
        setProdToSend(productSelect)
    }

    const getTotal =()=>{
        const totalAges = prodToSend.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0);
        console.log(typeof(totalAges))
        setTotalPriceProduct(totalAges)
    }

    useEffect(() => {
        getProductSelected();
        getTotal()
    },[])


    let history = useHistory()
    const back = ()=>{
        history.push("/products")
    }

/*     const deleteProduct =()=>{} */

    return (
        <main>
             <div className="icon" onClick={back}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <section>
        <h3>Carrito de compras</h3>
        <div className="order-container">
            <div className="cartSelected-container">
        {prodToSend.map(cartProduct =>(<CartSelected key={cartProduct.id} cartProduct ={cartProduct} />))}
        </div>
        <div className="table-container">
        <OrderTable  totalPriceProduct={totalPriceProduct}/>
        </div>
        </div>

        </section>
        </main>
    )
}

export default Cart