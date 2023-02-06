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
      name: "Chat-GPT flavored Chore List",
      description:
        "This is an app for parent who wants to assign chores for their kid, the kid also get reward in exchange when they complete their tasks",
      image: "chores.PNG",
      technologies: [
        "MERN stack",
        "JavaScript",
        "ChatGPT",
        "Mongo DB Atlas",
        "Heroku",
      ],
      github: "https://github.com/tarrol/effective-robot/tree/jaretProfilePage",
      deployed: "https://effective-robot.herokuapp.com",
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
