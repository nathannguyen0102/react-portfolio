import React from "react";

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={require("../../assets/images/1.jfif")}
          alt="about-me"
          className="photo"
        />
      </div>
      <div>
        <p></p>
        <p>
          Hello, my name is Nathan Nguyen .I am currently UCI bootcamp student,
          I hope i will learn everything I need to become a web developer.
        </p>
      </div>
    </section>
  );
}

export default About;
