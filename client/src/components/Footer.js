import React from "react";

const Footer=(props)=>{


    const {company,email}=props;
return(
        <div className="container-fluid">
            <hr/>
            
            <div className="text-center title text-uppercase">
                <samil>
            
                <span className="text-danger">Password By {company}</span> | <span className="text-muted">Contact By Email : {props.email}</span>
                </samil>
            </div>
        </div>  
        
        ) 

}

export default Footer;