import { useEffect } from 'react';
import '../styles/style.css';
import pic1 from '../assets/pic-1.png';
import pic2 from '../assets/pic-2.png';
import pic3 from '../assets/pic-3.png';
import pic4 from '../assets/pic-4.png';

function Review() {
    useEffect(() => {
        // تحميل Swiper بشكل ديناميكي إذا مش موجود
        if (typeof Swiper === 'undefined') {
            const swiperScript = document.createElement('script');
            swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
            swiperScript.onload = initSwiperAndEffects;
            document.head.appendChild(swiperScript);

            const swiperStyles = document.createElement('link');
            swiperStyles.rel = 'stylesheet';
            swiperStyles.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
            document.head.appendChild(swiperStyles);
        } else {
            initSwiperAndEffects();
        }

        initSectionEffects();

        // تنظيف تأثير scroll لما يطلع من الصفحة
        return () => {
            window.removeEventListener('scroll', handleScrollEffects);
        };
    }, []);

    function initSwiperAndEffects() {
        initNavigationButtons();

        new Swiper('.review-slider', {
            loop: true,
            grabCursor: true,
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                renderBullet: function (index, className) {
                    return <span class="${className}">${index + 1}</span>;
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init: animateSlides,
                slideChange: animateSlides,
            },
        });

        window.addEventListener('scroll', handleScrollEffects);
    }

    function animateSlides() {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
            slide.style.transform = 'translateY(30px)';
            setTimeout(() => {
                slide.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                slide.style.opacity = '1';
                slide.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    }

    function initNavigationButtons() {
        const nextBtn = document.createElement('div');
        nextBtn.className = 'swiper-button-next custom-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

        const prevBtn = document.createElement('div');
        prevBtn.className = 'swiper-button-prev custom-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

        const reviewSlider = document.querySelector('.review-slider');
        if (reviewSlider) {
            reviewSlider.appendChild(nextBtn);
            reviewSlider.appendChild(prevBtn);
        }
    }

    function initSectionEffects() {
        const container = document.querySelector('.review-slider');

        if (container && !document.querySelector('.swiper-pagination')) {
            const pagination = document.createElement('div');
            pagination.className = 'swiper-pagination';
            container.appendChild(pagination);
        }

        const stars = document.querySelectorAll('.stars i');
        stars.forEach(star => {
            star.style.transition = 'all 0.3s ease';
            star.addEventListener('mouseover', () => {
                star.style.transform = 'scale(1.3) rotate(10deg)';
                star.style.color = '#ff7b00';
            });
            star.addEventListener('mouseout', () => {
                star.style.transform = 'scale(1) rotate(0deg)';
                star.style.color = '';
            });
        });

        const userImages = document.querySelectorAll('.user img');
        userImages.forEach(img => {
            img.style.transition = 'all 0.4s ease';
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.1) rotate(5deg)';
                img.style.boxShadow = '0 10px 20px rgba(255, 123, 0, 0.3)';
            });
            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1) rotate(0deg)';
                img.style.boxShadow = '';
            });
        });
    }

    function handleScrollEffects() {
        const reviewSection = document.querySelector('.review');
        if (!reviewSection) return;

        const position = reviewSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (position.top < windowHeight * 0.75 && position.bottom >= windowHeight * 0.25) {
            reviewSection.classList.add('active');
        } else {
            reviewSection.classList.remove('active');
        }
    }

    return (
        <div className="container">
            <section className="review" id="review">
                <h3 className="sub-heading">رأي الزبائن</h3>
                <h1 className="heading">ماذا قالت الزبائن</h1>

                <div className="swiper review-slider">
                    <div className="swiper-wrapper">
                        {[pic1, pic2, pic3, pic4].map((pic, i) => {
                            const users = [
                                { name: 'سارة محمد', stars: 4.5, comment: 'الكاري مع الرز والدجاج؟ طبق طيّرني عالهند! التوابل موزونة، فيه لسعة حارة ناعمة، والدجاج طري ومستوي صح. الرز مفلفل، والنكهات منسجمة كأنك بتسمع سيمفونية أكل. بصراحة طبق بيستاهل ينطلب كل مرة!' },
                                { name: 'احمد جوعان', stars: 4.5, comment: 'الدجاج المشوي عندهم ولا أروع! الجلد مقرمش واللحم جوسي كأنه مشوي بنار العشق 😂. بهاراته ناعمة بس بتفرق، والخضار الجانبية مكمّلة الطبق. وجبة صحية ومش مملة أبدًا!' },
                                { name: 'سميرة احمد', stars: 3.5, comment: 'سندويتش الشنيتسل؟ أسطوري! الخبزة طرية وكأنها طازة من الفرن، والشنيتسل مقرمش من برا وطري من جوا. الصوصات موزونة مش طاغية، وكل لقمة بتحسسك إنك ملك' },
                                { name: 'مصطفى محمد', stars: 5, comment: 'الفطور الصحي فاجأني! مزيج حبوب، فواكه ومكسرات بطريقة متوازنة. خفيف على المعدة، بس مليان طاقة. مثالي لبداية يومية نشيطة .' }
                            ];

                            const stars = [];
                            for (let s = 1; s <= 5; s++) {
                                if (s <= Math.floor(users[i].stars)) {
                                    stars.push(<i key={s} className="fas fa-star"></i>);
                                } else if (s - users[i].stars <= 0.5) {
                                    stars.push(<i key={s} className="fas fa-star-half-alt"></i>);
                                }
                            }

                            return (
                                <div key={i} className="swiper-slide slide">
                                    <i className="fas fa-quote-right"></i>
                                    <div className="user">
                                        <img src={pic} alt="" />
                                        <div className="user-info">
                                            <h3>{users[i].name}</h3>
                                            <div className="stars">{stars}</div>
                                        </div>
                                    </div>
                                    <p>{users[i].comment}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <br />
            <br />
        </div>
    );
}

export default Review;