import React from "react";
import myPicture from '../assets/images/maria.jpg';
import resume from '../assets/docs/Maria Francis-Moullier - Resume - Web Developer.pdf';

function About() {

  return (
    <div className="container">
    <div className="row" id="bodyRow">
        <h3 id="headerText">About Me</h3>
    </div>
    <div className="row" id="bodyContent">
        <div className="col-12">
            <img src={myPicture}  id="mypicture" className="auth-image img-fluid" alt="Maria Francis-Moullier" />
            <p>My name is Maria Francis-Moullier, and I am a full stack web developer with skills in JavaScript, SQL, React, HTML and CSS.  I have a B.S. degree in Computer Science from the University of Arizona, and will be completing a certificate in Full Stack Web Development from the University of Arizona in April 2020</p>
            <p>In my career, I have developed a reputation as a team player who contributes to the larger organization’s success through conducting training, developing SOPs and best practices, and analyzing data for customer insights.  I have experience working in an Agile environment on a cross-functional product team.</p>
            <p>Working in the financial software-as-a-service industry, I built a business case from customer feedback data that led to the implementation of a requested SKU downgrade feature. This feature reduced customer cancellations by 20% while increasing transactional Net Promoter Scores by 37% on these customer contacts, and was nominated for a company innovation award.   I’m excited to contribute to an organization with my web development skills, creating better customer experiences.</p>
            <p><a href={resume} target="_blank" rel="noopener noreferrer" id="resumeList">My Resume</a></p>
          </div>
    </div>
</div>
  );
}

export default About;
