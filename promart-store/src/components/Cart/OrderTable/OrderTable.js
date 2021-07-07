import React from 'react';
import './OrderTable.sass';
import accounting from 'accounting';
import {useStateValue} from './../../../module/StateProvider'

const OrderTable = () => {

    const [{basket}, dispatch]= useStateValue()

    const getTotal =(basket)=> basket?.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0)
    

    return (
        <section className="table-content">
            <h4>Subtotal:</h4>
            <p>{accounting.formatMoney(getTotal(basket))}</p>                        
        </section>
    )
}

export default OrderTable