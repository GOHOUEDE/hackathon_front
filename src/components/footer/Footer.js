import React from "react";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMapPin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div> Copyright 2023</div>
      <div>
        <FaLocationArrow/>
        {/* <FaMapPin/> */}
      Carré 865 Immeuble François GOMEZ, Cotonou
      </div>
      <div className="d-flex align-items-center">
        {" "}
        Suivez-nous{" "}
        <span>
          <FaInstagram />
        </span>{" "}
        <span>
          <FaFacebook />
        </span>{" "}
        <span>
          <FaTwitter />
        </span>
      </div>
    </div>
  );
};

export default Footer;
