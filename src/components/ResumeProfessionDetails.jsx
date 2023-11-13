import { useState } from "react";
import "../styles/app.css";

function ResumeProfessionDetails() {
  return (
    <>
      <div className="resumeSection">
        <div className="resumeSectionHeader">
          <p>Professional Experience</p>
        </div>
        <div className="resumeSectionDetails">
          <div className="resumeSectionLeftColumn">
            <p className="resumeDate">08/2020 – present</p>
            <p className="resumeLocation">New York City, US</p>
          </div>
          <div className="resumeSectionRightColumn">
            <p className="resumeCompanyName">Umbrella Inc.</p>
            <p className="resumeJobTitle">UI & UX Designer</p>
            <p className="resumeJobDescription">
              Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android
            </p>
          </div>
        </div>
      </div>
      <div className="resumeSection">
        <div className="resumeSectionDetails">
          <div className="resumeSectionLeftColumn">
            <p className="resumeDate">08/2020 – present</p>
            <p className="resumeLocation">New York City, US</p>
          </div>
          <div className="resumeSectionRightColumn">
            <p className="resumeCompanyName">Black Mesa Labs</p>
            <p className="resumeJobTitle">Front End Engineer</p>
            <p className="resumeJobDescription">
              Supported senior researchers on accessibility standards for the
              open web. Created and usability tested wireframes and prototypes.
              Produced interactive documentation for quick onboarding of new
              researchers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeProfessionDetails;
