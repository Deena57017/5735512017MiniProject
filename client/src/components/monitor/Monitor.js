import React, {Component} from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state={totalPrice:0, orders:[]};
        this.addOrder=this.addOrder.bind(this);
    }

    addOrder(product){           //ขั้นตอนการ add สินค้า
        let findOrder = this.state.orders.find(order=>order.product.productId==product.productId);
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({product:product,quantity:1});
        }
        const totalPrice=this.state.totalPrice + parseInt(product.unitPrice); //ยอดรวมในการซื้อเพิ่มขึ้น ;แปลงจาก string เป็นตัวเลข parseInt
        this.setState({totalPrice: totalPrice,orders: this.state.orders});  // เสร็จฟังค์นี้ส่งไปที่ตัวปุ่มกด คือตรง product list
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders}/>

                    </div>
                </div>
            </div>
        )
    }
}
export default Monitor;