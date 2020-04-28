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
        const style = {height:150, marginTop:20};
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11 text-left">
                        <div className="text-black"><img style={style} src="/images/logo/IMG_3789.png"alt="canter"/><h1 style={{ display: 'inline' }}> TOM N TOMS COFFEE </h1></div>
                        <div><h6> TOM N TOMS COFFEE </h6></div>
                        
                        <hr/>
                    </div>
                    <div className="col-md-1 text-rigth">
                        <h5 className="text-muted mt-4">
                            {this.state.date.toLocaleTimeString()}</h5> 
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item title"><a href="/">หน้าหลัก</a></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><a href="/orders">รายการสั่งซื้อ</a></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><a href="/products">สินค้า</a></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><a href="/about">เกียวกับเรา</a></li>
                        

                    </ul>

                </div>
                
            </div>
        )
    }
}

export default Header;