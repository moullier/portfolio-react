import React from "react";
import xflss from '../assets/images/pickem_ss.png';
import recipess from "../assets/images/recipe_ss.png";
import weatherss from "../assets/images/weatherss.png";
import dayplannerss from "../assets/images/dayplanner_ss.png";

function Projects() {
  return (
    <div className="container">
    <div className="row" id="bodyRow">
      <h3 id="headerText">Projects</h3>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="work firstpair">
          <img src={xflss} alt="XFL Pick'Em" className="portfolioimage img-fluid" />
          <h3 className="figcaption text-center">
            <a href="https://morning-dawn-76670.herokuapp.com/" target="_blank" rel="noopener noreferrer">XFL Pick'Em</a> 
            &nbsp;
            <a href="https://github.com/moullier/XFL-pickem" target="_blank" rel="noopener noreferrer">(GitHub)</a></h3>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="work firstpair">
          <img src={recipess} alt="Recipe Finder" className="portfolioimage img-fluid" />
          <h3 className="figcaption text-center">
            <a href="https://moullier.github.io/recipefinder/recipefinder.html" target="_blank" rel="noopener noreferrer">Recipe Finder</a>
            &nbsp;
            <a href="https://github.com/moullier/recipefinder" target="_blank" rel="noopener noreferrer">(GitHub)</a></h3>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="work">
          <img src={weatherss} alt="Weather Dashboard" className="portfolioimage img-fluid" />
          <h3 className="figcaption text-center">
            <a href="https://moullier.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">Weather Dashboard</a>
            &nbsp;
            <a href="https://github.com/moullier/weather-dashboard" target="_blank" rel="noopener noreferrer">(GitHub)</a>
          </h3>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="work"> 
          <img src={dayplannerss} alt="Day Planner" className="portfolioimage img-fluid" />
          <h3 className="figcaption text-center">
            <a href="https://moullier.github.io/day-planner/" target="_blank" rel="noopener noreferrer">Day Planner</a>
            &nbsp;
            <a href="https://github.com/moullier/day-planner" target="_blank" rel="noopener noreferrer">(GitHub)</a>
          </h3>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Projects;
