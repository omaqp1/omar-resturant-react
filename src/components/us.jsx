import '../styles/style.css'
import address from '../assets/address.svg'
import thumbs from '../assets/thumbs.svg'
import restinnt from '../assets/restinnt.jpg'
import trophy from '../assets/trophy.svg'
import hatChef from '../assets/hat-chef.svg'
function US(){
    return(
        <>
        <main>
        <section className="section2" id="us">
            <h1>من نحن؟</h1>
        <div className="d1-1">
            <div className="d1-2">
                <img src={restinnt} className="restinnt"/></div>
            <div className="d1-3">
                
                <p>مطعم عمر هو مطعم يقدم افضل و اجود انواع الطعام في الشرق الأوسط  </p>
                <h3><a href="#foter" className="btn3">المزيد عنا</a></h3>
            </div>
        </div>
        <div className="d1-4">
                    <div className="t1" id="t">
                        <h2>التميز</h2>
                        <img src={trophy}/>
                    </div>
                    <div className="t2" id="t">
                        <h2>طعام طازج</h2>
                        <img src={hatChef}/>
                    </div>
                    <div className="t3" id="t">
                        <h2>خدمة عملاء</h2>
                        <img src={thumbs}/>
                    </div>
                    <div className="t4" id="t">
                        <h2>فروع عديدة</h2>
                        <img src= {address}/>
                    </div>
                </div>
        </section>
        </main>
        <br/>
        <br/>
        <hr/>
        <br/>
        </>
    );
}

export default US;