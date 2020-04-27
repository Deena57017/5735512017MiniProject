import React, {Component} from "react";

class ProductItem extends Component{

    constructor(props){
        super(props);
        
    }
   
    
    render(){
        const style = {height:300, marginTop:20};
        
        const {productName,unitPrice,thumbnail}=this.props.product;
        return(
            <div className="col-md6 col-sm-3">
                <img className="img-fluid img-thumbnail" style={style} src={thumbnail}/> 
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice} THB</p>
                <button className="btn btn-block btn-warning title" onClick={()=>this.props.onAddOrder(this.props.product)}>
                ซื้อ
                </button>
                
    
            </div>
        )

    }
}
export default ProductItem;







