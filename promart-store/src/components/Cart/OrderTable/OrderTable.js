import React from 'react';
import './OrderTable.sass'

const OrderTable = (props) => {
    console.log(props)

    return (
        <section className="table-content">
            <h4>Subtotal:</h4>
            <p>{props.totalPriceProduct}</p>                        
        </section>
    )
}

export default OrderTable