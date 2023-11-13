import { useState } from "react";
import PersonalDetailsInputs from "./PersonalDetailsInputs";
import EducationDetailsInputs from "./EducationDetailsInputs";
import WorkDetailsInputs from "./WorkDetailsInputs";
import ResumePersonalDetails from "./ResumePersonalDetails";
import ResumeEducationDetails from "./ResumeEducationDetails";
import ResumeProfessionDetails from "./ResumeProfessionDetails";

function App() {
  const [count, setCount] = useState(0);

  const jobExperiences = [];
  const educationExperiences = [];

  return (
    <div className="container">
      <div className="editor">
        <PersonalDetailsInputs />
        <EducationDetailsInputs />
        <WorkDetailsInputs />
      </div>
      <div className="resume">
        <ResumePersonalDetails />
        <ResumeEducationDetails />
        <ResumeProfessionDetails />
      </div>
    </div>
  );
}

export default App;
