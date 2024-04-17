import React from "react";
import "./Contact.css";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="cbox">
        <div className="up">
          <div className="l">
            <p className="myname">Shivaraj K P</p>
            <p>shivu.kp.333@gmail.com</p>
            <p>9108752296</p>
            <div className="soc">
              <a href="https://www.instagram.com/shivu_sp_33/?hl=en"><AiFillInstagram /></a>
              <a href=""><BsTwitterX/></a>
              <a href="https://www.linkedin.com/in/shivraj-kp-9920bb255/"><AiFillLinkedin/></a>
            </div>
          </div>
          <div className="r">
            <p className="myname">Sagar B</p>
            <p>sagar@gmail.com</p>
            <p>8073750421</p>
            <div className="soc">
              <a href=""><AiFillInstagram /></a>
              <a href=""><BsTwitterX/></a>
              <a href=""><AiFillLinkedin/></a>
            </div>
          </div>
        </div>
        <div className="down">
          <div className="l">
            <p className="myname">Santosh J</p>
            <p>santosh@gmail.com</p>
            <p>8608044165</p>
            <div className="soc">
              <a href=""><AiFillInstagram /></a>
              <a href=""><BsTwitterX/></a>
              <a href=""><AiFillLinkedin/></a>
            </div>
          </div>
          <div className="r">
            <p className="myname">Shree sanketh</p>
            <p>sanket@gmail.com</p>
            <p>9380366607</p>
            <div className="soc">
              <a href=""><AiFillInstagram /></a>
              <a href=""><BsTwitterX/></a>
              <a href=""><AiFillLinkedin/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
