import './App.css'
import React,{Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/ProductItem";




class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={produc}

  // }
  // componentDidMount(){

  // }
  render(){
    return(
      <div>
        <Header/>
        <ProductItem producName="Iphon" unitPrice="45000"/>
        <ProductItem producName="Iphon 11 " unitPrice="45000"/>
        <ProductItem producName="Iphon 11 pro" unitPrice="45000"/>
        <Footer company="Deena" email="Deena2038@gmail.com"/>  

      </div>
    );
  }
}
export default App;
