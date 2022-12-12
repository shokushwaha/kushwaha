import React from "react";


import {EmailSharp } from "@mui/icons-material";
import "./Footer.css";

function Footer() {
  return (
    <>
      
      <div className="box">
        <div className="one">Connect With Me</div>
        <div className="two"> <EmailSharp /> </div>
        <div className="three">shobhitkushwaha1406@gmail.com</div>
        <div className="four"><a href="mailTo:shobhitkushwaha1406@gmail.com" target="_blank">Send Email</a></div>
      </div>
      <p className="copyRight"> &copy; 2022 Shobhit Kushwaha</p>
    </>
  );
}

export default Footer;