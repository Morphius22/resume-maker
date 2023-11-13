import { useState } from "react";
import "../styles/app.css";

function ResumePersonalDetails() {
  return (
    <div className="resumeHeader">
      <h3 className="resumeName">full name</h3>
      <div className="resumePersonDetailsSection">
        <div className="resumePersonDetail">
          <p className="icon">icon</p>
          <p>email</p>
        </div>
        <div className="resumePersonDetail">
          <p className="icon">icon</p>
          <p>phone</p>
        </div>
        <div className="resumePersonDetail">
          <p className="icon">icon</p>
          <p>address</p>
        </div>
      </div>
    </div>
  );
}

export default ResumePersonalDetails;
