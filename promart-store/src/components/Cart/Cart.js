import React from 'react';
import Footer from '../Footer/Footer'
import CartSelected from './../Cart/CartSelected/CartSelected'


const Cart = () => {

    return (
        <main>
            <section>
        <h3>Carrito de compras</h3>
        <CartSelected />
        <Footer />
        </section>
        </main>
    )
}

export default Cart