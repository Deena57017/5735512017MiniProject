import React, {Component} from "react";
// const ProductItem = (props)=>{

//     const {producName,unitPrice}=props;
//     return(
//         <div>
//             <p>{producName}</p>
//             <p>{unitPrice}</p>

//         </div>
//     )

// }
class ProductItem extends Component{
    constructor(props){
        super(props);
        console.log('constructor|' + props.producName)
    }
    render(){
        const {producName,unitPrice}=this.props;
        return(
            <div>
                <p>{producName}</p>
                <p>{unitPrice}</p>
    
            </div>
        )

    }
}
export default ProductItem;