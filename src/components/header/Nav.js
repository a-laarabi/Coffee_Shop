import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='headerNav'>
      <ul className='headerUlNav'>
        <li><NavLink to="/" className="nav_link">Home</NavLink></li>
        <li><NavLink to="/" className="nav_link">About</NavLink></li>
        <li><NavLink to="/" className="nav_link">Products</NavLink></li>
        <li><NavLink to="/" className="nav_link">Review</NavLink></li>
        <li><NavLink to="/" className="nav_link">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;