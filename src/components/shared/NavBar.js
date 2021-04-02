import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/company/history">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
