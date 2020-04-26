import React, {Component} from "react";

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        setInterval(()=>this.tick(),1000)
        console.log('constructor')
    }
    componentDidMount(){
        console.log('componentDidMount')

    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    tick(){
        this.setState({date : new Date()});
    }
    render(){
        return(
        <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Header;