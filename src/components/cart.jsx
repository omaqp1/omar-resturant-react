import React from 'react';
import styles from '../styles/style-cart.module.css';
import { useCart } from "../context/cartContext.jsx";
import { useNavigate } from "react-router-dom";
    
function Cart() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useCart();


    const mergedItems = cartItems.reduce((acc, item) => {
        const existingItem = acc.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    const totalPrice = mergedItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className={styles.cartPage}>
            <header className={styles.header}>
                <nav className={styles.cart}>
                    <h1 className='fas fa-utensils'>مطعم عمر</h1>
                    <h3 className="fas fa-shopping-cart">السلة</h3>
                    <h2><a href="#" className='fas fa-home' onClick={(e) => {e.preventDefault();
                        navigate('/home');
                    }}> العودة للرئيسية</a></h2>
                </nav>
            </header>

            <main className={styles.cartContent}>
                <section className={styles.itemsSection}>
                    <h2> المنتجات المختارة:</h2>

                    {mergedItems.length === 0 ? (
                        <p className={styles.pmain}>السلة فارغة</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>المنتج</th>
                                    <th>الكمية</th>
                                    <th>السعر الفردي</th>
                                    <th>المجموع</th>
                                    <th>إجراء</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mergedItems.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.title || item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>₪{item.price.toFixed(2)}</td>
                                        <td>₪{(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                حذف
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>

                <section className={styles.checkoutSection}>
                    <h3 > المجموع الكلي: ₪{totalPrice.toFixed(2)}</h3>
                    <button className={styles.orderButton}>اطلب الآن</button>
                </section>
            </main>
        </div>
    );
}

export default Cart;