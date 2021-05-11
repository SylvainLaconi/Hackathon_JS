import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-ctn">
      <nav>
        <ul className="menu-ctn">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/triallist">Our trials</Link>
          </li>
          <li>
            <Link to="/registration">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
