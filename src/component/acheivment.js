import ManageAcheivment from '../other/manage-acheivment';
import './acheivment.css';

function Acheivment(){
    return(
        <div id='acheiv-part'>
            <div id='acheiv-text-head'>
                <p>
                    Acheivment
                </p>
            </div>
            <div id='acheiv-content'>
                <div id='soudemy'>
                    <ManageAcheivment type = '1' head = 'Soudemy' text = 'static website ขายเฟอร์นิเจอร์ ซึ่งได้นำการออกแบบมาจาก Figma community และ นำมาเขียน โค้ดโดยใช้ HTML ,CSS และ Javascript โดยออกแบบ animation ของตัวเว็บเอง และรองรับ Responsive ที่ขนาด 1366 px ,1250 px ,900px ,760px' img = '/img/soudemy.png'/>
                    <a href='https://learnwrite.netlify.app/'>Go to this website</a>
                </div>
                <div id='uifry'>
                    <ManageAcheivment type = '1' head = 'Uifry' text = 'static website สำหรับจัดหางาน โดยได้ template มาจาก Figma community แล้วนำมาเขียนโดยการใช้ HTML และ CSS ซึ่งออกแบบ animation ภายในเว็บเอง และยังอยู่ในระหว่างการสร้างกับออกแบบ animation ของตัวเว็บไซต์ ' img = '/img/uifry.png'/>
                    <a href='https://csslearnwrite.netlify.app/'>Go to this website</a>
                </div>
                <div id='hack'>
                    <ManageAcheivment type = '1' head = 'Hack club cucek' text = 'Static web site ทำขึ้นโดยใช้ React JS ซึ่งได้นำ template มาจาก Figma community เป็นเว็บไซต์เกี่ยวกับโรงเรียนที่สอนเขียนโค้ด และได้ออกแบบ animation ภายในเว็บไซต์เอง และอยู่ระหว่างสร้าง' img = '/img/hack.png'/>
                    <a href='https://learnreactwrite.netlify.app/'>Go to this website</a>
                </div>
                <div id='mobile'>
                    <ManageAcheivment type = '2' head = 'Dart & Flutter' text = 'Cross platform application ใช้งานควบคุมอุปกรณ์IoT ภายในบ้าน พัฒนาร่วมกับเพื่อนอีก 1 คนและยังพัฒนาไม่ เสร็จเพราะสิ้นสุดระยะเวลาฝึกงานก่อน' img = '/img/mobile.png'/>
                </div>
                <div id='bac'>
                    <ManageAcheivment type = '3' head = 'AI & Machiens learning' text = 'พัฒนา AI ที่ช่วยในการตรวจนับจำนวน เชื้อแบคทีเรียภายในถาดทดลอง โดยใช้ Custom data จากการ Lable ร่วมกับเพื่อนอีก 1 คน' img = '/img/bac.png'/>
                </div>
            </div>
        </div>
    );

};
export default Acheivment;