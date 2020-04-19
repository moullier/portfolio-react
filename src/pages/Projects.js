import React from "react";
import xflss from '../assets/images/pickem_ss.png';
import recipess from "../assets/images/recipe_ss.png";
import weatherss from "../assets/images/weatherss.png";
import dayplannerss from "../assets/images/dayplanner_ss.png";
import Project from "../components/Project";

function Projects() {
  return (
    <div className="container">
    <div className="row" id="bodyRow">
      <h3 id="headerText">Projects</h3>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <Project 
          imgSrc = {xflss}
          altText = "XFL Pick'Em"
          hostedLocation = "https://morning-dawn-76670.herokuapp.com/"
          gitHubLocation = "https://github.com/moullier/XFL-pickem"
        />
      </div>
      <div className="col-12 col-md-6">
        <Project 
          imgSrc = {recipess}
          altText = "Recipe Finder"
          hostedLocation = "https://moullier.github.io/recipefinder/recipefinder.html"
          gitHubLocation = "https://github.com/moullier/recipefinder"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <Project 
          imgSrc = {weatherss}
          altText = "Weather Dashboard"
          hostedLocation = "https://moullier.github.io/weather-dashboard/"
          gitHubLocation = "https://github.com/moullier/weather-dashboard"
        />
      </div>
      <div className="col-12 col-md-6">
        <Project 
          imgSrc = {dayplannerss}
          altText = "Day Planner"
          hostedLocation = "https://moullier.github.io/day-planner/"
          gitHubLocation = "https://github.com/moullier/day-planner"
        />
      </div>
    </div>
  </div>
  );
}

export default Projects;
