import React, {Component} from "react";


class Calculator extends Component{
    render(){
        return(
            <div>
                <h1 className="text-rigth">189.0</h1>
                <hr/>
                <ul className="list-unstyled">
                    <li className="text-rigth text-success title"> </li>
                        บิงซู x 1 = 200.0
                        <button className="btn btn-light btn-sm">X</button>
                    <li className="text-rigth text-success title"></li>
                        เฟรนฟราย x 1 = 140.0
                        <button className="btn btn-light btn-sm">X</button>
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title">confirm</button>
                <button className="btn btn-block btn-secondary title">cancel</button>
            </div>

        );
    }
}
export default Calculator;