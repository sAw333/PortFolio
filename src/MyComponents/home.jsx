import React from "react";
import { FaRegHandPaper, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function Home() {
  return (
    <>
      <div className="homeMain">
        <h1 className="homeIcons">
          <FaRegHandPaper />
        </h1>
        <div className="home">
          <h1 className="homeEle">
            <VscChevronLeft />
            Hi , I'm Shubham Jaiswal
            <VscChevronRight />
          </h1>
          <h1 className="homeEle">
            <VscChevronLeft />
            A Front-End Developer
            <VscChevronRight />
          </h1>
          <h1 className="homeEle">
            <VscChevronLeft />
            Based In India
            <VscChevronRight />
          </h1>
          <h1 className="homeEle">
            <VscChevronLeft />
            <a
              className="homeLinksOne"
              href="https://www.linkedin.com/in/shubham-jaiswal-96690/"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="homeLinksTwo"
              href="https://github.com/sAw333"
              target="blank"
            >
              <FaGithub />
            </a>
            <VscChevronRight />
          </h1>
        </div>
        <h1 className="homeIcons">
          <FaRegHandPaper />
        </h1>
      </div>
    </>
  );
}

export default Home;
