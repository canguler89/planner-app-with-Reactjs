import React from "react";
import { Link } from "react-router-dom";
import Signedoutlinks from "./Signedoutlinks";
import SignedInLinks from "./Signedinlinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <Signedoutlinks />
      </div>
    </nav>
  );
};

export default Navbar;