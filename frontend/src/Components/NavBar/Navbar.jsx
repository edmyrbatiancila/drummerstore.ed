import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
  return (
    <section id='header'>
        <img className='logo' src={assets.logo} alt="drummerboy logo" />
        <div className="container_navbar">
            <ul id='navbar'>
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <li id='lg-bag'><i className='fa-solid fa-bag-shopping'></i></li>
                <div className='dot'></div>
                <i id='close' className="fa-solid fa-xmark"></i>
            </ul>
            <div className="navbar-right">
                <i className='fa-solid fa-bag-shopping'></i>
            </div>
        </div>
        <div id="mobile">
            <i className="fa-solid fa-bag-shopping"></i>
            <i id="bar" className="fa-solid fa-bars"></i>
        </div>
    </section>
  )
}

export default Navbar;
