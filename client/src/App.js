import './App.css'
import React,{Component} from 'react';
import Header from "./components/Header";
import Monitor from "./components/monitor/Monitor";
import Footer from "./components/Footer";
import axios from "axios";




class App extends Component{
  constructor(props){
    super(props);
    this.state={products:""};

  }
  componentDidMount(){
    //**1
    // this.setState({products:[
      // {productId:1, productName:"Yuja Marlade Ice Cream", unitPrice:"189", thumbnail:"/images/logo/IMG_3775.jpg"},
      // {productId:2, productName: "Yuja Black Coffee", unitPrice:"150", thumbnail:"/images/logo/IMG_3776.jpg"},
      // {productId:3, productName: "Heney Yuja Yogurt", unitPrice:"130", thumbnail:"/images/logo/IMG_3777.jpg"},
      // {productId:4, productName: "Strawberry Belgian Waffle", unitPrice:" 200", thumbnail:"/images/logo/IMG_3778.jpg"},
      // {productId:5, productName: "Iced Strawberry Cafe Latte", unitPrice:"200", thumbnail:"/images/logo/IMG_3779.jpg"},
      // {productId:6, productName: "Hongsi Smoothie", unitPrice:"150", thumbnail:"/images/logo/IMG_3780.jpg"},
      // {productId:7, productName: "Ice Strawberry cafe Latte ", unitPrice:"170", thumbnail:"/images/logo/IMG_3781.jpg"},
      // {productId:8, productName: "Blooming Strawberry ", unitPrice:"200", thumbnail:"/images/logo/IMG_3782.jpg"},
      // {productId:9, productName: "Hongsi Smoothie", unitPrice:"160", thumbnail: "/images/logo/IMG_3783.jpg"},
      // {productId:10, productName: "Roast Chicken", unitPrice:"100", thumbnail: "/images/logo/IMG_3784.jpg"},
      // {productId:11, productName: "Bing Shoco", unitPrice:"280", thumbnail: "/images/logo/IMG_3785.jpg"},
      // {productId:12, productName: "Strawberry Chocolate", unitPrice:"155", thumbnail: "/images/logo/IMG_3786.jpg"},
      // {productId:13, productName: "CAN TUMBLER", unitPrice:"750", thumbnail: "/images/logo/IMG_3787.jpg"},
  
  // ]})
  // **2
  // fetch("http://localhost:3333/products",{ method: "GET" })
  //   .then(res=>res.json())
  //   .then(res=>{this.setState({products: res})})

  // **3
  axios.get("http://localhost:3333/products").then(res=>{
    {this.setState({products:res.data})}
  });



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
