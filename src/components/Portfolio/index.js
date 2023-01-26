import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Food Recipe",
      description: "This is a handy food book for anyone who wants to cook",
      image: "foodrecipe.PNG",
      technologies: ["HTML/CSS", "JavaScript", "tailwinds", "APIs"],
      github: "https://github.com/nathannguyen0102/foodRecipeProject",
      deployed: "https://nathannguyen0102.github.io/foodRecipeProject/",
    },
    {
      name: "Connect4",
      description:
        "This is a connect4 game where you can save your high score and leader board",
      image: "connect4.PNG",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Handlebars.js",
        "Express & SQL",
        "Heroku",
      ],
      github: "https://github.com/nathannguyen0102/connect4",
      deployed: "https://shielded-beyond-66940.herokuapp.com/WywSSNNV",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
