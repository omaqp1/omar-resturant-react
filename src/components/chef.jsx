import '../styles/style.css'
import chef1 from '../assets/chef1.webp'
import chef2 from '../assets/chef2.jpg'
import chef3 from '../assets/chef3.jpg'
function Chef(){
    return(
        <>
        <div classNameName="container">
    <section className="chef" id="chef">
            <h1 className="heading">الطباخين</h1>
        <div className="chef-container">
            <div className="chef-1" id="chefc">
                <img src={chef1} className="one-img"/>
                <h1>الشيف هيناتا كانجي</h1>
                <div className="fas fa stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className="chif-social">
                    <a target="_blank" href="https://www.facebook.com/share/19DFu2EYCW/" className="sss"><i className="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="https://x.com/Omar42416586?s=09" className="sss"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://www.instagram.com/omaqp1/profilecard/?igsh=MXBlampzNnhpaWRpYg==" className="sss"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="chef-2" id="chefc">
                <img src={chef2} className="two-img"/>
                <h1>الشيف لوجين ووكر</h1>
                <div className="fas fa stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className="chif-social">
                    <a target="_blank" href="https://www.facebook.com/share/19DFu2EYCW/" className="sss"><i className="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="https://x.com/Omar42416586?s=09" className="sss"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://www.instagram.com/omaqp1/profilecard/?igsh=MXBlampzNnhpaWRpYg==" className="sss"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="chef-3" id="chefc">
                <img src={chef3} className="three-img"/>
                <h1>الشيف بيلي ديفس</h1>
                <div className="fas fa stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className="chif-social">
                    <a target="_blank" href="https://www.facebook.com/share/19DFu2EYCW/" className="sss"><i className="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="https://x.com/Omar42416586?s=09" className="sss"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://www.instagram.com/omaqp1/profilecard/?igsh=MXBlampzNnhpaWRpYg==" className="sss"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </section>
</div>
<br/>
<br/>
<br/>
        </>
    )
}

export default Chef