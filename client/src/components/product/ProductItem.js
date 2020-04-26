import React, {Component} from "react";

class ProductItem extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const {producName,unitPrice, thumbnail}=this.props;
        return(
            <div className="col-md3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail}/>
                <h5 className="mt-2">{producName}</h5>
                <p className="title text-right">{unitPrice}</p>
                <button className="btn btn-block btn-seccondary title">
                        ซื้อ
                </button>
    
            </div>
        )

    }
}
export default ProductItem;