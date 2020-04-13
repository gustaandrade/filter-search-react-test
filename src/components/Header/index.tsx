import React from "react";

import Logo from "../../assets/logo.svg";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Webmotors" />
    </div>
  );
};

export default Header;
