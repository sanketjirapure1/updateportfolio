import React from "react";
import {
  FaBloggerB,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
// import { sgjlogo } from "../../assets/index";
import "../../index.css";

const Footer = () => {
  return (
    // <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: "5rem" }}>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/sanket-jirapure1" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>

          <a href="https://github.com/sanketjirapure1" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>

          <a href="https://instagram.com/sanket_jirapure" target="_blank">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>

          <a href="#" target="_blank">
            <span className="bannerIcon">
              {/* <FaFacebookF /> */}
              <FaBloggerB />
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
