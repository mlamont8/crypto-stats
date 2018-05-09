import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import CoinForm from "../coinForm/CoinForm";

const Header = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">CryptoStats</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <CoinForm />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
