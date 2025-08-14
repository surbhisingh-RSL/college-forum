import React from 'react';
// import './NavbarComponent.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  return (
    <nav className="NavbarComponent">
      <div className="NavbarComponent__logo">
       <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>Logo</h2> 
       </Link>
      </div>
      <div className="NavbarComponent__right">
        <input type="text" className="NavbarComponent__search" placeholder="Search..." />
        <FaUserCircle className="NavbarComponent__profile-icon" />
      </div>
    </nav>
  );
};

export default NavbarComponent;