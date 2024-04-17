import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import dash from "../images/das4.png";
import dep from "../images/d1.png";
import wd from "../images/w2.png";
import ep from "../images/ep.png";
import ar from "../images/arrow3.jpg";
import scp from "../images/scp.png";

const Scholarship = () => {
  return (
    <>
      <div className="left">
        <Link to="/Student2">
          <img src={dash} alt="" /> Dashboard
        </Link>
        <Link to="/Deposit2">
          <img src={dep} alt="" /> Deposit
        </Link>
        <Link to="/Withdraw2">
          <img src={wd} alt="" /> Withdraw
        </Link>
        <Link to="/Profile2">
          <img src={ep} alt="" /> Profile
        </Link>
        <Link to="/Scholarship">
          <img src={scp} alt="" /> Scholarship
        </Link>
      </div>

      <div className="scholarship">
      <div className="scp">
          <h3>SSP Scholarship</h3>
          <a className="scp-btn" href="https://ssp.postmatric.karnataka.gov.in/">Click Here to know more!</a>
        </div>

        <div className="scp scp-right">
          <h3>NSP Scholarship</h3>
          <a className="scp-btn" href="https://scholarships.gov.in/">Click Here to know more!</a>
        </div>

        <div className="scp">
          <h3>FFE Scholarship</h3>
          <a className="scp-btn" href="https://ffe.org/">Click Here to know more!</a>
        </div>

        <div className="scp scp-right">
          <h3>HDFC Scholarship</h3>
          <a className="scp-btn" href="https://www.hdfcbankecss.com/">Click Here to know more!</a>
        </div>
      </div>

      <div className="arrow">
      <img className="arrowimg" src={ar} alt="" />
      </div>

      <h1 className="apply">Apply Now!!</h1>
    </>
  );
};

export default Scholarship;
