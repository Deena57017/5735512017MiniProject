import React, {Component} from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

class ProductAdd extends Component{
    constructor(props) {
        super(props);
        this.state = { product: { productName: '', unitPrice: 0} };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addProduct(product) {
        console.log(product)
        // axios.delete("http://localhost:3000/Orders/"+order.id).then(res=>{
        //     axios.get("http://localhost:3000/Orders/").then(
        //         res=>{
        //             this.setState({orders:res.data});
        //         }
        //     )
        // })
    }

    
    handleChange(event) {
        this.setState({ value: event.target.value })
      }
    
      handleSubmit(event) {
        alert(this.state.username)
        event.preventDefault()
      }

    render(){
        return(
            <div>
                <Header/>
                    <div className="container col-md-5">
                    <h3>เพิ่มสินค้า</h3>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Hello</h1>
                        <p>Enter Product Name:</p>
                        <input
                        type="text" className="form-control" value={this.state.product.productName}
                        />
                        <p>Enter Product Unit Price:</p>
                        <input
                        type="number" className="form-control" value={this.state.product.unitPrice}
                        onChange={this.handleChange}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                <Footer company="Deena" email="Deena2038@gmail.com"/>

            </div>
            
        );
    }
}
export default ProductAdd;