import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Accueil</Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/ListEmployes">Employés</Link>
            </li>
            <li>
              <Link to="/ListCandidats">Candidats</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;