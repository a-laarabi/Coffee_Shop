import React from "react";
import videoLink from "../../assets/headerBackground.mp4";
import Nav from "./Nav";
import './header.css';

const Header = () => {
  return (
    <header>
      <Nav />
      <video src={videoLink} muted loop autoPlay />
      <div className='back' />
      <h1>Your Coffee</h1>
    </header>
  )
}

export default Header;
