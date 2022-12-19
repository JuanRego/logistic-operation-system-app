import FooterStyle from "./style";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active === false) {
      setActive(true);
    }
    if (active === true) {
      setActive(false);
    }
  };

  return (
    <FooterStyle onClick={() => handleClick()}>
      {active && (
        <div
          className="extension"
          onClick={() => {
            window.location.href = "http://bonca.com.br/";
          }}
        >
          Este é um app feito por Bonca.com.br
        </div>
      )}
      <div className="mini-logo">B</div>
    </FooterStyle>
  );
};

export default Footer;
