import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import * as styles from './styles.module.css';
const Header = function HeaderComponent() {
  const navStyle = {
    backgroundColor: '#1b1d26'
  };
  return (
    <nav
      id="header"
      className="navbar navbar-expand-md navbar-dark"
      style={navStyle}
    >
      <Link className="navbar-brand" to="/">
        <img className={styles.logo} src={logo} role="presentation" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              My Wallet <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Register <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Login<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
