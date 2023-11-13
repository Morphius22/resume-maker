import { useState } from "react";
import PersonalDetailsInputs from "./inputs/PersonalDetailsInputs";
import EducationDetailsInputs from "./inputs/EducationDetailsInputs";
import WorkDetailsInputs from "./inputs/WorkDetailsInputs";
import ResumePersonalDetails from "./resume/ResumePersonalDetails";
import ResumeEducationDetails from "./resume/ResumeEducationDetails";
import ResumeProfessionDetails from "./resume/ResumeProfessionDetails";

function App() {
  const [jobExperiences, setJobExperiences] = useState([
    {
      location: "New York City, US",
      date: "08/2020 – present",
      company: "Black Mesa Labs",
      jobTitle: "UI & UX Designer",
      jobDescription:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      location: "New York City, US",
      date: "08/2020 – present",
      company: "Rolly Polly",
      jobTitle: "Front End Engineer",
      jobDescription:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
  ]);
  const [educationExperiences, setEducationExperiences] = useState([
    {
      location: "New York City, US",
      date: "08/2020 – present",
      schoolName: "London City University",
      degree: "Bachelors in Economics",
    },
    {
      location: "New York City, US",
      date: "08/2020 – present",
      schoolName: "San Diego State University",
      degree: "Mechanical Engineering",
    },
  ]);

  return (
    <div className="container">
      <div className="editor">
        <PersonalDetailsInputs />
        <EducationDetailsInputs
          educationExperiences={educationExperiences}
          setEducationExperiences={setEducationExperiences}
        />
        <WorkDetailsInputs
          jobExperiences={jobExperiences}
          setJobExperiences={setJobExperiences}
        />
      </div>
      <div className="resume">
        <ResumePersonalDetails />
        <ResumeEducationDetails educationExperiences={educationExperiences} />
        <ResumeProfessionDetails jobExperiences={jobExperiences} />
      </div>
    </div>
  );
}

export default App;
