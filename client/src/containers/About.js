import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About=()=>{
    return(
        <div>
            <Header/>
            <div className="container col-md-5">
                <h3>เกียวกับเรา</h3>
                <p className="title text-justify mt-4 mb-4">
                เกี่ยวกับเรา
ไม่ว่าลูกค้าจะรับเครื่องดื่มจากบาริสต้าของเรากี่ล้านครั้งในแต่ละสัปดาห์ ความสัมพันธ์ระหว่างเรากับลูกค้าก็ยังคงเอกลักษณ์ไว้เหมือนเดิมการยื่นถ้วยกาแฟให้ถึงมือลูกค้าที่เคาน์เตอร์อาจเป็นเรื่องธรรมดาในสายตาหลายๆคนแต่สำหรับเราแล้วนั่นคือการแลกเปลี่ยนสัมพันธภาพระหว่างกันทุกสิ่งที่เราทำต้องสะท้อนให้เห็นถึงความมีมนุษยสัมพันธ์ไม่ว่าจะเป็นความมุ่งมั่นที่มีต่อ ความเป็นกาแฟคุณภาพสุดยอด ของโลก ไปจนถึงวีธีการมีส่วนร่วมกับลูกค้าและชุมชน เพื่อการดำเนินธุรกิจอย่างรับผิดชอบ
จากร้านๆหนึ่งที่เริ่มต้นเมื่อเกือบสี่สิบปีที่แล้วเราขยายกิจการไปหลายแห่งทุกแห่งที่เราเข้าดำเนินกิจการต่อจากเจ้าของเดิมเราพยายามปรับปรุงให้ดีขึ้นเรื่อยๆ

                </p>
                <h6 className="text-info">From TOM N TOMS COFFEE</h6>

            </div>
            <Footer company="Deena" email="Deena2038@gmail.com"/>
        </div>
    )
}
export default About;