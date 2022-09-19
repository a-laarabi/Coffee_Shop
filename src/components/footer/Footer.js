import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import './footer.css';

const Footer = () => (
  <footer>
    <ul className="socialMedia">
      <li><NavLink to=""><FaFacebookF /></NavLink></li>
      <li><NavLink to=""><AiFillInstagram /></NavLink></li>
      <li><NavLink to=""><AiOutlineTwitter /></NavLink></li>
      <li><NavLink to=""><BsPinterest /></NavLink></li>
      <li><NavLink to=""><AiFillLinkedin /></NavLink></li>
    </ul>

    <ul className="headerUlNav">
      <li><NavLink to="/" className="nav_link">Home</NavLink></li>
      <li><NavLink to="/" className="nav_link">About</NavLink></li>
      <li><NavLink to="/" className="nav_link">Products</NavLink></li>
      <li><NavLink to="/" className="nav_link">Review</NavLink></li>
      <li><NavLink to="/contact" className="nav_link">Contact</NavLink></li>
    </ul>

    <h3 className="rights">
      Created By
      <NavLink className="creator" to="https://www.linkedin.com/in/a-laarabi/">  Laarabi Anasse  </NavLink>
      {' '}
      | All Rights Reserved
    </h3>
  </footer>
);

export default Footer;
