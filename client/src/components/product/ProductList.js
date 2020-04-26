import React, {Component} from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component{

    showProducts(){
        if(this.props.products){
           return this.props.products.map(product=>(
                <ProductItem productName={product.productName} unitPrice={product.unitPrice}/>
            ))
        }
    }
    render(){
        return(
            <div className="row">

            </div>
        )
    }
}
export default ProductList;