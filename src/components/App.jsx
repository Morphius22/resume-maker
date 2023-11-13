import { useState } from "react";
import PersonalDetailsInputs from "./inputs/PersonalDetailsInputs";
import EducationDetailsInputs from "./inputs/EducationDetailsInputs";
import WorkDetailsInputs from "./inputs/WorkDetailsInputs";
import ResumePersonalDetails from "./resume/ResumePersonalDetails";
import ResumeEducationDetails from "./resume/ResumeEducationDetails";
import ResumeProfessionDetails from "./resume/ResumeProfessionDetails";

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
