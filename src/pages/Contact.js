import React from "react";
import ghlogo from '../assets/images/GitHub-Mark-64px.png';
import lilogo from '../assets/images/LI-In-Bug.png';
import resume from '../assets/docs/Maria Francis-Moullier - Resume - Web Developer.pdf';

function Contact() {

  return (
    <div className="container">
    <div className="row" id="bodyRow">
        <h3 id="headerText">Contact Me</h3>
    </div>
    <div className="row" id="bodyContent">
        <div className="col-md-4">
            <div className="card">
                <div className="card-header" id="contactHeader">
                    <h5 className="card-title">Contact Info</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Phone: 520-661-8894</p>
                  <p className="card-text">Email: moullier@gmail.com</p>
                  <p className="card-text"><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-header" id="GitHubHeader">
                    <h5 className="card-title">GitHub</h5>
                    <img src={ghlogo} className="githubLogo" alt="GitHub Logo"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Check out my projects at GitHub</p>
                    <a href="https://github.com/moullier" className="card-link" target="_blank" rel="noopener noreferrer">My GitHub Profile</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-header" id="LinkedInHeader">
                    <h5 className="card-title">LinkedIn</h5>
                    <img src={lilogo} className="linkedinLogo" alt="LinkedIn Logo" />
                </div>
                <div className="card-body">
                  <a href="https://www.linkedin.com/in/maria-francis-moullier-494b259/" className="card-link" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Contact;
