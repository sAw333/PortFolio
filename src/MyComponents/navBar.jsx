import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navTwo">
        <Link to="/" className="navEle">
          <b>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("HOME").start();
              }}
            />
          </b>
        </Link>
      </span>
      <span className="navTwo">
        <Link to="/about" className="navEle">
          <b>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("ABOUT ME").start();
              }}
            />
          </b>
        </Link>
        <Link to="/contact" className="navEle">
          <b>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("GET IN TOUCH").start();
              }}
            />
          </b>
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
