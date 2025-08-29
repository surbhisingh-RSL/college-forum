import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="NavbarComponent__logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src="/college-forum-logo.png"
              alt="College Forum Logo"
              style={{ height: "40px" }}
            />

          </Link>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <Link to="/profile" className="ms-3">
          <FaUserCircle size={28} />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
