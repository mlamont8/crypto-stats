import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import CoinForm from "../coinForm/CoinForm";

const Header = props => {
  const firstRender = props.firstLoad ? null : (
    <Navbar.Collapse>
      <Nav pullRight>
        <CoinForm />
      </Nav>
    </Navbar.Collapse>
  );
  return (
    // <Navbar collapseOnSelect>
    //   <Navbar.Header>
    //     <Navbar.Brand>
    //       <a href="#brand">CryptoStats</a>
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //   </Navbar.Header>
    //   {firstRender}
    // </Navbar>

    <nav className="uk-navbar-container" uk-navbar>
      <div className="uk-navbar-left">

        <span className="uk-navbar-item uk-logo">Crypto Stats</span>

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
