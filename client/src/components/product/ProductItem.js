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

                {this.props.onAddOrder && 
                <button className="btn btn-block btn-warning title" onClick={()=>this.props.onAddOrder(this.props.product)}>
                ซื้อ
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) &&
                <button className="btn btn-primary col-5 title">
                แก้ไข
                </button>
                }
                
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                <button className="btn btn-danger col-5 float-right title" onClick={()=>this.props.onDelProduct(this.props.product)}>
                ลบ
                </button>
                 }
               
 
                
    
            </div>
        )

    }
}
export default ProductItem;







