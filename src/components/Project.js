import React from "react";

function Project(props) {

    return (
        <div className="work firstpair">
            <img src={props.imgSrc} alt={props.altText} className="portfolioimage img-fluid" />
            <h3 className="figcaption text-center">
            <a href={props.hostedLocation} target="_blank" rel="noopener noreferrer">{props.altText}</a> 
            &nbsp;
            <a href={props.gitHubLocation} target="_blank" rel="noopener noreferrer">(GitHub)</a></h3>
        </div>
    );
  }
  
  export default Project;
  