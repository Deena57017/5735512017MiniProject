import './App.css'
import React,{Component} from 'react';
import Header from "./components/Header";
import Monitor from "./components/monitor/Monitor";
import Footer from "./components/Footer";
// import ProductItem from "./components/product/ProductItem";




class App extends Component{
  constructor(props){
    super(props);
    this.state={produc:""}

  }
  componentDidMount(){
    this.setState({products:[
      {productId:1, productName: "สลัดผัก", unitPrice:"189", thumbnail: "/images/product/1.png"},
      {productId:2, productName: "ไก่ทอด", unitPrice:"150", thumbnail: "/images/product/2.png"},
      {productId:3, productName: "บิงซู", unitPrice:"130", thumbnail: "/images/product/3.png"},
      {productId:4, productName: "เฟรนฟราย", unitPrice:"175", thumbnail: "/images/product/4.png"},
      {productId:5, productName: "เค้ก 3 ชิ้น ", unitPrice:"200", thumbnail: "/images/product/5.png"},
      {productId:6, productName: "กาแฟ", unitPrice:"150", thumbnail: "/images/product/6.png"},
      // {productId:7, productName: "Ice Strawberry cafe Latte ", unitPrice:"170", thumbnail: "/images/product/7.png"},
      // {productId:8, productName: "Blooming Strawberry ", unitPrice:"200", thumbnail: "/images/product/8.png"},
      // {productId:9, productName: "Hongsi Smoothie", unitPrice:"160", thumbnail: "/images/product/9.png"},
      // {productId:10, productName: "Roast Chicken", unitPrice:"100", thumbnail: "/images/product/10.png"},
      // {productId:11, productName: "Bing Shoco", unitPrice:"280", thumbnail: "/images/product/11.png"},
      // {productId:12, productName: "Strawberry Chocolate", unitPrice:"155", thumbnail: "/images/product/12.png"},
      // {productId:13, productName: "CAN TUMBLER", unitPrice:"750", thumbnail: "/images/product/13.png"},
  
  ]})

  }
  render(){
    return(
      <div>
        <Header/>
        <Monitor products={this.state.products}/>
       
        <Footer company="Deena" email="Deena2038@gmail.com"/>  

      </div>
    );
  }
}
export default App;
