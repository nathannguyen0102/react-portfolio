import React from "react";

function Resume() {
  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Resume</h1>
      </div>
      <div className="bottom-spacing">
        <h4>Download my Resume</h4>
      </div>
      <div>
        <h5>Front-End Proficiencies</h5>
        <ol>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ol>
        <br></br>
        <h5>Back-End Proficiencies</h5>
        <ol>
          <li>APIs</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ol>
      </div>
    </section>
  );
}

export default Resume;
