import React, {Component} from "react";


class Calculator extends Component{

    showOrders(orders){
        if(!orders||orders.length==0){
            return <li className="text-right text-muted title">ไม่มีสินค้าค่ะ</li>


        }else{
            return orders.map(order=>{
                return(
                <li className="text-rigth text-dark title">
                    {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                <button className="btn btn-light btn-sm">X</button>
                </li>
                )
            })
        }

    }
    render(){
        const {totalPrice,orders} = this.props;
        return(
            <div>
                <h1 className="text-rigth ">{totalPrice}</h1>
                <hr/>
                <ul className="list-unstyled">
                        {this.showOrders(orders)}
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title">confirm</button>
                <button className="btn btn-block btn-dark title">cancel</button>
            </div>

        );
    }
}
export default Calculator;

