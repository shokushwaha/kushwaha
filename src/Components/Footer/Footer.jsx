import React from "react";

import { EmailSharp } from "@mui/icons-material";
import resume from "./Shobhit .pdf"
import "./Footer.css";

function Footer() {
  return (
    <>

      <div className="box">
        <div className="four five"><a href={resume} download>Download CV</a></div>
        <div className="one">Connect With Me</div>
        <div className="two"> <EmailSharp /> </div>
        <div className="three">shobhitkushwaha1406@gmail.com</div>
        <div className="four"><a href={resume} target="_blank">Send Email</a></div>
      </div>
      <p className="copyRight"> &copy; 2022 Shobhit Kushwaha</p>
    </>
  );
}

export default Footer;
