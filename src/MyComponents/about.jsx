import React from "react";

function About() {
  return (
    <div className="aboutMain">
      <div className="aboutHeader">
        <h1>
          <span className="head">ABOUT</span>
        </h1>
      </div>
      <div className="aboutContent">
        <img
          className="aboutImg"
          src="https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
        <h3 className="aboutPara">
          Hello! My name is Shubham Jaiswal and I can conjur a website from
          nothing into existence. My interest in Web Development started 3
          months ago back in 2021. I specialize in manipulating the elements of
          the Web namely HTML ,CSS and JAVASCRIPT. I totally fell in love with
          the idea of bringing thoughts to existence in real life and I continue
          to learn more and more everyday. Eventually, I started learning React
          JS as a result of which here I'm representing myself. My Dream is to
          become a successful developer and be of help to everyone out there
          failing to follow their passion and dream of being a developer. When
          I'm not coding, You'll find me playing cricket, listening to music and
          did I mention? I Love playing poker.
        </h3>
      </div>
      <span className="resume">
        <a
          className="aboutLink"
          href="https://drive.google.com/file/d/1dt7FVMnZRrC3zGEsl6PQ0tPZOT_xFtdr/view?usp=sharing"
          target="blank"
        >
          Resume
        </a>
      </span>
    </div>
  );
}

export default About;
