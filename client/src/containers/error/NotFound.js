import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound=()=>{
    return(
        <div>
            <Header/>
            <div className="container col-md-10 text-center"></div>
                <h1 className="container col-md-10 text-center"style={{fontSize:120}}>404</h1>
                <h2 className="container col-md-10 text-center">Not Found</h2>
                <p className="container col-md-10 text-center">ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณพยายามเข้าถึงไม่มีอยู่อีกต่อไปหรืออาจจะย้ายไปยังหน้าเว็บเพจอื่น</p>
            <Footer/>
        </div>
    )
}
export default NotFound;
    