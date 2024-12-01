import React from "react";
import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FacebookIcon className="icons" />
        <XIcon className="icons" />
        <YouTubeIcon className="icons" />
        <InstagramIcon className="icons" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 2024 Dawit Tesfaye. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
