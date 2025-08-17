import React from 'react';
// import './NavbarComponent.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
      <div className="NavbarComponent__logo">
       <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>Logo</h2> 
       </Link>
      </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarComponent;