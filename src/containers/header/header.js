import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
// import CoinForm from "../coinForm/CoinForm";

const Header = () => {
  return (


    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">

        <span className="uk-navbar-item uk-logo">Crypto Stats</span>

      </div>

      <div className="uk-navbar-right">
      <div className="uk-margin uk-grid-small uk-child-width-auto">
            <label> Notifications</label>
            <label><input className="uk-radio" type="radio" checked /> On</label>
            <label><input className="uk-radio" type="radio" /> Off</label>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  firstLoad: PropTypes.bool
};

Header.defaultProps = {
  firstLoad: true
};

export default Header;
