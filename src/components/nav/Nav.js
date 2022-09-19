import { NavLink } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logoSrc from '../../assets/coffee-shop-logo-D92C9F5E83-seeklogo.com.png';
import './nav.css';

const Nav = () => (
  <nav className="headerNav">
    <NavLink to="/" className="logoLink"><img src={logoSrc} alt="Logo" /></NavLink>
    <ul className="headerUlNav">
      <li><NavLink to="/" className="nav_link">Home</NavLink></li>
      <li><NavLink to="/" className="nav_link">About</NavLink></li>
      <li><NavLink to="/" className="nav_link">Products</NavLink></li>
      <li><NavLink to="/" className="nav_link">Review</NavLink></li>
      <li><NavLink to="/contact" className="nav_link">Contact</NavLink></li>
    </ul>
    <ul className="payement">
      <li><NavLink to="/"><FaSearch /></NavLink></li>
      <li><NavLink to="/"><FaShoppingCart /></NavLink></li>
    </ul>
  </nav>
);

export default Nav;
