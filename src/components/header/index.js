import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import * as styles from './styles.module.css';
import usrImg from '../../assets/images/usrProfile.png';
import bellImg from '../../assets/images/bell.png';
import mailImg from '../../assets/images/mail.png';

const UnauthorizedNav = function UnauthorizedNav() {
  return (
    <React.Fragment>
      <ul className={['navbar-nav mr-auto', styles.leftBar].join(' ')}>
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
          <Link className="nav-link" to="/login">
            Login<span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
const AuthorizedNav = function AuthorizedNav() {
  return (
    <React.Fragment>
      <ul className={['navbar-nav mr-auto', styles.leftBar].join(' ')}>
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className={['nav-item', styles.leftBorder].join(' ')}>
          <Link className="nav-link disabled-link" to="/">
            Balance: 20 Dimonds <br />
            <span className={styles.ethValue}>Eth Value: 0.20</span>
          </Link>
        </li>
        <li className={['nav-item', styles.leftBorder].join(' ')}>
          <Link className="nav-link" to="/wallet">
            My Wallet
          </Link>
        </li>
        <li className={['nav-item', styles.leftBorder].join(' ')}>
          <Link className="nav-link" to="/report">
            History
          </Link>
        </li>
        <li className={['nav-item', styles.leftBorder].join(' ')}>
          <Link className="nav-link disabled-link" to="/help">
            Help
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link disabled-link position-relative" to="/help">
            <div className={styles.notificationBox}>
              <img className={styles.notificationMailItem} src={mailImg} />
              <span className={styles.circle} />
              <span className={styles.num}>5</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled-link position-relative" to="/help">
            <div className={styles.notificationBox}>
              <img className={styles.notificationNavItem} src={bellImg} />
              <span className={styles.circle} />
              <span className={styles.num}>5</span>
            </div>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="float-left">
              <div className={styles.usrImgContainer}>
                <img src={usrImg} role="presentation" />
              </div>
            </div>
            <div className="float-left">
              <p className={styles.goodEvening}>Good evening</p>
              <p className={styles.usrName}>Tom Smith</p>
              <p className={styles.win}>Win: 779</p>
            </div>
            <div className="dropdown-menu">
              <a className="dropdown-item">Action 0</a>
              <a className="dropdown-item">Action 1</a>
              <a className="dropdown-item">Action 2</a>
            </div>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};
const Header = function HeaderComponent() {
  const navStyle = {
    backgroundColor: '#10141e',
    color: '#9cacae'
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
        <AuthorizedNav />
      </div>
    </nav>
  );
};

export default Header;
