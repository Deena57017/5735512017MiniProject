import React, {Component} from "react";


class Calculator extends Component{
    render(){
        return(
            <div>
                <h1 className="text-rigth">18.0</h1>
                <hr/>
                <ul className="list-unstyled">
                    <li className="text-rigth text-dark title"/>
                        บิงซู x 1 = 2.0
                        <button className="btn btn-light btn-sm">X</button>
                    <li className="text-rigth text-dark title"/>
                        เฟรนฟราย x 1 = 140.0
                        <button className="btn btn-light btn-sm">X</button>
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title">confirm</button>
                <button className="btn btn-block btn-dark title">cancel</button>
            </div>

        );
    }
}
export default Calculator;

