import React from 'react';
import { NavLink } from 'react-router-dom';
import videoLink from '../../assets/headerBackground.mp4';
import Nav from '../nav/Nav';
import './header.css';

const Header = () => (
  <header>
    <Nav />
    <video src={videoLink} muted loop autoPlay />
    <h1>FRESH COFFEE</h1>
    <NavLink to="/" className="getLink">Get it Now</NavLink>
  </header>
);

export default Header;
