import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <section id='header'>
        <img className='logo' src={assets.logo} alt="drummerboy logo" />
        <div className="container_navbar">
            <ul id='navbar'>
                <li onClick={() => setMenu("home")}><span className={menu === "home" ? "active" : ""}>Home</span></li>
                <li onClick={() => setMenu("shop")}><span className={menu === "shop" ? "active" : ""}>Shop</span></li>
                <li onClick={() => setMenu("blog")}><span className={menu === "blog" ? "active" : ""}>Blog</span></li>
                <li onClick={() => setMenu("about")}><span className={menu === "about" ? "active" : ""}>About</span></li>
                <li onClick={() => setMenu("contact")}><span className={menu === "contact" ? "active" : ""}>Contact</span></li>
                <i id='close' className="fa-solid fa-xmark"></i>
            </ul>
        </div>
        <div className="navbar-right">
            <span onClick={() => setMenu("cart")}><i id='lg-bag' className={menu === "cart" ? "fa-solid fa-bag-shopping active" : "fa-solid fa-bag-shopping"}></i></span>
            <div className='dot'></div>
            <button>Sign in</button>
        </div>
        
        <div id="mobile">
            <i className="fa-solid fa-bag-shopping"></i>
            <i id="bar" className="fa-solid fa-bars"></i>
        </div>
    </section>
  )
}

export default Navbar;
