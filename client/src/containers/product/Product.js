import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import axios from "axios";

class Product extends Component{
    constructor(props){
        super(props);
        this.state={products:null};
        this.delProduct=this.delProduct.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:3000/products").then(res=>{
            this.setState({products:res.data});
        })
    }
    delProduct(product){
        axios.delete(`http://localhost:3000/products/${product.id}`).then(res=>{
            const filterProductList = this.state.products.filter(function(item) {
                return item.id !== product.id;
            });
            this.setState({products: filterProductList});
        })
    }

    
    render()
    {

        return(
        

            <div>
                <Header/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11">
                            <h1>สินค้า</h1>
                        </div>
                        {/* <div className="col-md-1">
                            <a href="/product/add"><button className="btn btn-warning title float-rigth">เพิ่ม</button></a>
                        </div> */}
                    </div>
                    <ProductList products={this.state.products}
                        onDelProduct={this.delProduct}
                    />
                </div>
                <Footer/>
            </div>

        )
    }
}


export default Product;