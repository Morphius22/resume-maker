import { useState } from "react";
import PersonalDetailsInputs from "./inputs/PersonalDetailsInputs";
import EducationDetailsInputs from "./inputs/EducationDetailsInputs";
import WorkDetailsInputs from "./inputs/WorkDetailsInputs";
import ResumePersonalDetails from "./resume/ResumePersonalDetails";
import ResumeEducationDetails from "./resume/ResumeEducationDetails";
import ResumeProfessionDetails from "./resume/ResumeProfessionDetails";

function App() {
  //personal details state management section
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const savePersonalDetails = (personalDetails, setPersonalDetails) => {
    let newPersonalDetails = { ...personalDetails };
    newPersonalDetails = {
      fullName: personalDetails.fullName,
      email: personalDetails.email,
      phoneNumber: personalDetails.phoneNumber,
      address: personalDetails.address,
    };
    setPersonalDetails(newPersonalDetails);
  };

  const clearPersonalDetails = (personalDetails, setPersonalDetails) => {
    const latestPersonalDetails = {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    };
    setPersonalDetails(latestPersonalDetails);
  };

  //job experience state management section
  const [jobExperiences, setJobExperiences] = useState([
    {
      workLocation: "New York City, US",
      workStartDate: "08/2020",
      workEndDate: "present",
      companyName: "Black Mesa Labs",
      position: "UI & UX Designer",
      workDescription:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      workLocation: "New York City, US",
      workStartDate: "08/2020",
      workEndDate: "present",
      companyName: "Rolly Polly",
      position: "Front End Engineer",
      workDescription:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      workLocation: "",
      workStartDate: "",
      workEndDate: "",
      companyName: "",
      position: "",
      workDescription: "",
    },
  ]);

  const saveWorkExperience = (jobExperiences, setJobExperiences) => {
    const newJobExperiences = [...jobExperiences];
    newJobExperiences.push({
      position: "",
      companyName: "",
      workStartDate: "",
      workEndDate: "",
      workLocation: "",
      workDescription: "",
    });
    setJobExperiences(newJobExperiences);
  };

  const clearWorkForm = (jobExperiences, setJobExperiences) => {
    const latestJobExperience = [...jobExperiences];
    latestJobExperience[latestJobExperience.length - 1] = {
      position: "",
      companyName: "",
      workStartDate: "",
      workEndDate: "",
      workLocation: "",
      workDescription: "",
    };
    setJobExperiences(latestJobExperience);
  };

  //education state management section
  const [educationExperiences, setEducationExperiences] = useState([
    {
      schoolLocation: "New York City, US",
      schoolStartDate: "08/2020",
      schoolEndDate: "present",
      schoolName: "London City University",
      degree: "Bachelors in Economics",
    },
    {
      schoolLocation: "New York City, US",
      schoolStartDate: "08/2020",
      schoolEndDate: "present",
      schoolName: "San Diego State University",
      degree: "Mechanical Engineering",
    },
    {
      schoolLocation: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schoolName: "",
      degree: "",
    },
  ]);

  const saveEducationExperience = (
    educationExperiences,
    setEducationExperiences
  ) => {
    const newEducationExperiences = [...educationExperiences];
    newEducationExperiences.push({
      schoolName: "",
      degree: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schoolLocation: "",
    });
    setEducationExperiences(newEducationExperiences);
  };

  const clearEducationForm = (
    educationExperiences,
    setEducationExperiences
  ) => {
    const latestEducationExperience = [...educationExperiences];
    latestEducationExperience[latestEducationExperience.length - 1] = {
      schoolLocation: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schoolName: "",
      degree: "",
    };
    setEducationExperiences(latestEducationExperience);
  };

  // const clearEntireForm = (
  //   jobExperiences,
  //   setJobExperiences,
  //   educationExperiences,
  //   setEducationExperiences
  // ) => {
  // };

  return (
    <div className="container">
      <div className="editor">
        <PersonalDetailsInputs
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          savePersonalDetails={savePersonalDetails}
          clearPersonalDetails={clearPersonalDetails}
        />
        <EducationDetailsInputs
          educationExperiences={educationExperiences}
          setEducationExperiences={setEducationExperiences}
          saveEducationExperience={saveEducationExperience}
          clearEducationForm={clearEducationForm}
        />
        <WorkDetailsInputs
          jobExperiences={jobExperiences}
          setJobExperiences={setJobExperiences}
          saveWorkExperience={saveWorkExperience}
          clearWorkForm={clearWorkForm}
        />
      </div>
      <div className="resume">
        <ResumePersonalDetails personalDetails={personalDetails} />
        <ResumeEducationDetails educationExperiences={educationExperiences} />
        <ResumeProfessionDetails jobExperiences={jobExperiences} />
      </div>
    </div>
  );
}

export default App;
