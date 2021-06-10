import React from "react";
import logo from "./images/Logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div>
      <div className="footer">
        <Link className="footer__backToTop" onClick={scrollToTop}>
        <p className="footer__text">Back to Top</p>
        <div className="footer__info">
          <ul>
            <li>Get to Know Us</li>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Shravan's Cares</li>
            <li>Gift a smile</li>
          </ul>
          <ul>
            <li>Connect with us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul>
            <li>Make Money with Us</li>
            <li>Sell on Shravan's</li>
            <li>Sell under Shravan's</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Shravan's</li>
            <li>Shravan's Pay</li>
          </ul>
          <ul>
            <li>Connect with us</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Shravan's App Download</li>
            <li>Shravan's Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footer__copyright">
          <img src={logo} />
          <h4>Conditions of Use & Sale Privacy &nbsp;&nbsp; Notice &nbsp;&nbsp;Interest-Based Ads© 1996-2021, shravans.com, Inc. or its affiliates<br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just to make things clear, this ain't the original Amazon app. It's a clone!</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;