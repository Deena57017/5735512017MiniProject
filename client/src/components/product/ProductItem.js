import React from "react";
const ProductItem = (props)=>{

    const {producName,unitPrice}=props;
    return(
        <div>
            <p>{producName}</p>
            <p>{unitPrice}</p>

        </div>
    )

}
export default ProductItem;