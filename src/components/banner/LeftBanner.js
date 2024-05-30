import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["I'm Frontend Developer.", "I'm  Web Developer.", "I'm Blogger."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white fontstyle">
          Hi,
          <span className="text-designColor capitalize">Sanket Jirapure</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A Front-End Developer is responsible for developing new user-facing features, 
          determining the structure and design of web pages, building reusable codes,
          optimizing page loading times, and using a variety of markup languag to create the web pages.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/sanket-jirapure1" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>

            <a href="https://instagram.com/sanket_jirapure" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>

            <a href="https://facebook.com/jirapure1sanket" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>

            <a href="https://twitter.com/sanket_jirapure" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJsSquare />
            </span>

            <span className="bannerIcon">
              <FaReact />
            </span>

            <span className="bannerIcon">
              <FaNodeJs />
            </span>

            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
