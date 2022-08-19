import { Link } from "react-scroll";
import React from 'react';

function Navbar() {
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          
          <ul className="bar">
          <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>R.K Engineering</Link>
            </li>
            <li>
              <Link>Our Products</Link>
            </li>
            <li>
              <Link>Our Clients</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            
            
          </ul>
      
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
