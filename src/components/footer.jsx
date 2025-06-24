import '../styles/style.css'

function Footer(){
    return(
        <>
        <div className="container">
    <section className="footer" id="foter">
        <div className="box-container-0">
            <div className="box1">
                <h3>المواقع</h3>
                <a href="#">الهند</a>
                <a href="#">اليابان</a>
                <a href="#">روسيا</a>
                <a href="#">أمريكا</a>
                <a href="#">فرنسا</a>
            </div>
            <div className="box1">
                <h3>روابط سريعة</h3>
                <a href="#home">الرئيسية</a>
                <a href="#menu">الأطباق</a>
                <a href="#us">من نحن</a>
                <a href="#chef">الطهاة</a>
                <a href="review#">التقييمات</a>
                <a href="#order">الطلب</a>
            </div>
            <div className="box1">
                <h3>معلومات التواصل</h3>
                <a >+972 587022353</a>
                <a >omaqp111@gmail.com</a>
                <a >kxjjdidh@gmail.com</a>
                <a >القدس - رأس العامود</a>
            </div>
            <div className="box1">
                <h3>تابعنا</h3>
                <a  target="_blank" href="https://www.facebook.com/share/19DFu2EYCW/">فيسبوك</a>
                <a  target="_blank" href="https://x.com/Omar42416586?s=09">تويتر</a>
                <a  target="_blank" href="https://www.instagram.com/omaqp1/profilecard/?igsh=MXBlampzNnhpaWRpYg==">انستجرام</a>
                <a href="https://github.com/omaqp1" target="_blank">جيت هب</a>
            </div>
        </div>
         
    </section>
</div>
<div className="credit">حقوق النشر @ 2025 بواسطة <span>Omar mhalwas</span></div>
        </>
    );
}
export default Footer;