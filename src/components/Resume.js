import React from "react";
import resumeimg from "../assets/resume.png";
import "./Resume.scss";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-left">
        <img src={resumeimg} alt="Resume preview" />
      </div>

      <div className="resume-right">
        <div className="resume-content">
          <h1>Resume</h1>
          <p>
            You can view my resume here:{" "}
            <a
              className="resume-btn"
              href="public/files/Pradeep Kumar resume. (1).pdf"
              download="Pradeep Kumar resume. (1).pdf"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
