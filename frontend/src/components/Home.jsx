import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../App.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import agrloan from "../images/agrloan.jpg";
import carloan from "../images/carloan.jpg";
import eduloan from "../images/eduloan.jpg";
import homeloan from "../images/homeloan.jpg";
import goldloan from "../images/goldloan.jpg";
import ins from "../images/ins.jpg"
import { BrowserRouter } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

function SpCarousel() {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img className="" src={agrloan} alt="" /></Item>
          <Item><img src={homeloan} alt="" /></Item>
          <Item><img src={carloan} alt="" /></Item>
          <Item><img src={eduloan} alt="" /></Item>
          <Item><img src={goldloan} alt="" /></Item>
          <Item><img src={ins} alt="" /></Item>
        </Carousel>
      </div>
    </>
  );
}

const Home = () => {
  return (
    <div className="home ">
      <div className="socials">
        <a className="social-icons wa" href="https://chat.whatsapp.com/GSWhigLbnsRBCYEblReFKR">
          Whatsapp
          <AiOutlineWhatsApp className="icons waa" />
        </a>
        <a className="social-icons fb" href="https://www.facebook.com/netfinancehub?mibextid=LQQJ4d">
          Facebook
          <AiFillFacebook className="icons fbb" />
        </a>
        <a className="social-icons ig" href="https://www.instagram.com/netfinancehub?igsh=MW1tMmc5MHp3eDB2bQ==">
          Instagram
          <AiFillInstagram className="icons igg" />
        </a>
        <a className="social-icons x" href="https://x.com/NETFINANCEHUB?t=Mzwc7yL6ft9YY_I-FA17hw&s=08">
          TwitterX
          <BsTwitterX className="icons xx" />
        </a>
      </div>

      <div className="box">
        <div className="b student">
          <img
            id="stu"
            className="img"
            src="https://t4.ftcdn.net/jpg/04/24/15/27/360_F_424152729_5jNBK6XVjsoWvTtGEljfSCOWv4Taqivl.jpg"
            alt=""
          />
          <h2 className="bh">Student Login</h2>
          <Link className="login" to="./Login2">
            Login
          </Link>
        </div>

        <div className="b personal">
          <img
            id="per"
            className="img"
            src="https://av.sc.com/cn/en/content/images/cn-ways-to-bank-online-services-masthead-1600x490-1.jpg"
            alt=""
          />
          <h2 className="bh">Personal login</h2>
          <Link className="login" to="./Login">
            Login
          </Link>
        </div>
      </div>
      <marquee behavior="" direction="">
        Hurry up !!!! 👏Our bank gives student loans with only 1% interest. A
        golden opportunity for the students to achieve their goals and pursue
        the studies without worries. A successful life is waiting for you
        students.
      </marquee>

      <div className="imageslider">
        <SpCarousel/>
      </div>
    </div>
  );
};

export default Home;
