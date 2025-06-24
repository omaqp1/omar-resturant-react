import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);

      const sections = document.querySelectorAll('section');
      sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (currentScrollY >= offset && currentScrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`main-header ${showHeader ? 'visible-header' : 'hidden-header'}`}>
        <section className="flex">
          <a href="#home" className="logo">
            <i className="fas fa-utensils"></i> مطعم عمر
          </a>

          <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <a className={activeSection === 'home' ? 'active' : ''} href="#home">الرئيسية</a>
            <a className={activeSection === 'us' ? 'active' : ''} href="#us">عنا</a>
            <a className={activeSection === 'menu' ? 'active' : ''} href="#menu">القائمة</a>
            <a className={activeSection === 'review' ? 'active' : ''} href="#review">التقييم</a>
            <a className={activeSection === 'chef' ? 'active' : ''} href="#chef">الطباخين</a>
          </nav>

          <div className="icons">
            <i className="fas fa-search" id="search-icon" onClick={() => setSearchOpen(true)}></i>
            <a href='#' className="fas fa-shopping-cart" onClick={(e) => { e.preventDefault(); navigate('/Cart'); }}></a>
            <i
              className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}
              id="menu-bars"
              onClick={() => setMenuOpen(prev => !prev)}
            ></i>
          </div>
        </section>
      </header>

      {/* Search Form */}
      <div id="search-form" className={searchOpen ? 'active' : ''}>
        <input type="search" id="search-box" placeholder="ابحث هنا..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
        <i className="fas fa-times" id="close" onClick={() => setSearchOpen(false)}></i>
      </div>
    </>
  );
}

export default Header;