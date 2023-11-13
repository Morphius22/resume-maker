import { useState } from "react";
import "../styles/app.css";

function ResumeEducationDetails() {
  return (
    <div className="resumeSection">
      <div className="resumeSectionHeader">
        <p>Education</p>
      </div>
      <div className="resumeSectionDetails">
        <div className="resumeSectionLeftColumn">
          <p className="resumeDate">08/2020 – present</p>
          <p className="resumeLocation">New York City, US</p>
        </div>
        <div className="resumeSectionRightColumn">
          <p className="resumeSchoolName">London City University</p>
          <p className="resumeSchoolDegree">Bachelors in Economics</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeEducationDetails;
