import '../styles/style.css';
import { useCart } from "../context/cartContext.jsx";
import { useNavigate } from "react-router-dom";

import img1 from '../assets/menu-1.jpg';
import img2 from '../assets/menu-2.jpg';
import img3 from '../assets/menu-3.jpg';
import img4 from '../assets/menu-4.jpg';
import img5 from '../assets/menu-5.jpg';
import img6 from '../assets/menu-6.jpg';
import img7 from '../assets/menu-7.jpg';
import img8 from '../assets/menu-8.jpg';
import img9 from '../assets/menu-9.jpg';

function Menu() {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const items = [
        {
            id: 1,
            name: '',
            price: 24.99,
            img: img1,
            title: 'دجاج مشوي',
            porgraf: 'دجاج مشوي بالحطب والخضار الطازج مع توابل طازجة',
            stars: 4.5
        },
        {
            id: 2,
            name: '',
            price: 17.99,
            img: img2,
            title: 'شطائر الشنيتسل',
            porgraf: 'شطائر الشنيتسل مع خضار و يمكنك تخصيص محتوياتها',
            stars: 4.5
        },
        {
            id: 3,
            name: '',
            price: 12.99,
            img: img3,
            title: 'اجنحة دجاج',
            porgraf: 'اجنحة دجاج مع صوصات مميزة مع توابل مميزة',
            stars: 4.5
        },
        {
            id: 4,
            name: '',
            price: 11.99,
            img: img4,
            title: 'وجبة فطور صحية',
            porgraf: 'تشكيلة طعام لذيذة و صحية و مناسبة للرياضين',
            stars: 3.5
        },
        {
            id: 5,
            name: '',
            price: 14.99,
            img: img5,
            title: 'عشاء صحي',
            porgraf: 'عشاء صحي مع تنوع في الطعام و التوابل',
            stars: 4
        },
        {
            id: 6,
            name: '',
            price: 9.99,
            img: img6,
            title: 'رز مع خضار',
            porgraf: 'رز مع خضار طازج صحي و يمكنك تخصيص محتوياته',
            stars: 4.5
        },
        {
            id: 7,
            name: '',
            price: 5.99,
            img: img7,
            title: 'فول و بطاطا',
            porgraf: 'فول مع بطاطا و بصل صحي و لذيذ',
            stars: 4.5
        },
        {
            id: 8,
            name: '',
            price: 7.99,
            img: img8,
            title: 'رز مع كاري بالدجاج',
            porgraf: 'رز مع كاري و دجاج طازج و صحي',
            stars: 5
        },
        {
            id: 9,
            name: '',
            price: 30,
            img: img9,
            title: 'تخصيص طعام',
            porgraf: 'طعام يتم اعداده بحسب ذوقك و اختياراتك',
            stars: 4.5
        },
    ];

    const handleAdd = (M) => {
        addToCart(M);
        navigate('/cart');
    };

    return (
        <>
            <div className="container">

                <section className="menu" id="menu">

                    <h3 className="sub-heading">قائمة المنتجات</h3>
                    <br />
                    <br />

                    <div className="box-container">

                        {/*------------------box 0------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[0].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>{items[0].title}</h3>
                                <p>{items[0].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[0]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[0].price}</span>
                            </div>
                        </div>

                        {/*------------------box 1------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[1].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>{items[1].title}</h3>
                                <p>{items[1].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[1]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[1].price}</span>
                            </div>
                        </div>

                        {/*------------------box 2------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[2].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>{items[2].title}</h3>
                                <p>{items[2].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[2]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[2].price}</span>
                            </div>
                        </div>

                        {/*------------------box 3------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[3].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars" id="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star-empty"></i>
                                </div>
                                <h3>{items[3].title}</h3>
                                <p>{items[3].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[3]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[3].price}</span>
                            </div>
                        </div>

                        {/*------------------box 4------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[4].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h3>{items[4].title}</h3>
                                <p>{items[4].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[4]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[4].price}</span>
                            </div>
                        </div>

                        {/*------------------box 5------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[5].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>{items[5].title}</h3>
                                <p>{items[5].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[5]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[5].price}</span>
                            </div>
                        </div>

                        {/*------------------box 6------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[6].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>{items[6].title}</h3>
                                <p>{items[6].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[6]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[6].price}</span>
                            </div>
                        </div>

                        {/*------------------box 7------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[7].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h3>{items[7].title}</h3>
                                <p>{items[7].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[7]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[7].price}</span>
                            </div>
                        </div>

                        {/*------------------box 8------------------------------------- */}
                        <div className="box">
                            <div className="image">
                                <img src={items[8].img} alt="" />
                                <a href="#" className="fas fa-heart"></a>
                            </div>
                            <div className="content">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <h3>{items[8].title}</h3>
                                <p>{items[8].porgraf}</p>
                                <a className="btn" onClick={(e) => {
                                    handleAdd(items[8]);
                                    e.preventDefault();
                                    }  }>add to cart</a>
                                <span className="price">${items[8].price}</span>
                            </div>
                        </div>

                    </div>

                </section>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

export default Menu;