import React from 'react';
import './OrderTable.sass';
import accounting from 'accounting';
import {getItemCart} from './../../../module/cart-local'

const OrderTable = () => {


    const getTotal =(basket)=> basket?.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0)
    

    return (
        <div className="table-content">
            <h4>Subtotal:</h4>
            <p>{accounting.formatMoney(getTotal(getItemCart()))}</p>                        
        </div>
    )
}

export default OrderTable