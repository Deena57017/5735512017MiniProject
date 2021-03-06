import React, { Component } from "react";

class Calculator extends Component {

    showOrders (orders) {
        if(!orders || orders.length == 0) {
            return <li className="text-right text-muted title">No products</li>
        } else {
            return orders.map(order => {
                return (
                    <li key={order.product.productId} className="text-right text-info title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)} >X</button>
                    </li>
                    )
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-primary title" onClick={() => this.props.onConfirmOrder()} >confirm</button>
                <button className="btn btn-block btn-dark title" onClick={() => this.props.onCancelOrder()} >cancel</button>
            </div>
        );
    }
}

export default Calculator;