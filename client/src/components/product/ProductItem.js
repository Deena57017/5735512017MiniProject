import React, {Component} from "react";

class ProductItem extends Component{

    constructor(props){
        super(props);
        
    }
    render(){
        const style = {height:300, marginTop:10};
        
        const {productName,unitPrice,thumbnail}=this.props;
        return(
            <div className="col-md3 col-sm-6">
                <img className="img-fluid img-thumbnail" style={style} src={thumbnail}/> 
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice}</p>
                <button className="btn btn-md btn-warning">ซื้อ</button>
    
            </div>
        )

    }
}
export default ProductItem;






