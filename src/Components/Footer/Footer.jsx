import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">FOODLOVER</div>
          <div className="right">
            <p>Kolkata, West Bengal</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
            <p>Email Us: contactus@foodlover.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By FOODLOVER.COM</p>
          </div>
          <div className="right">
            <p>All Rights Reserved 2024.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;