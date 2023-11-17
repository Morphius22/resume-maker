import React from "react";
import Button from "../Button";

const FormControl = ({
  clearResumeHandler,
  loadExampleResumeHandler,
  setJobExperiences,
  setEducationExperiences,
  setPersonalDetails,
}) => {
  return (
    <div className="formControl buttonGroup">
      <Button
        buttonText="Clear Resume"
        onClick={() =>
          clearResumeHandler({
            setEducationExperiences,
            setJobExperiences,
            setPersonalDetails,
          })
        }
        className="btn btn-primary"
      />
      <Button
        buttonText="Load Example"
        onClick={() =>
          loadExampleResumeHandler({
            setEducationExperiences,
            setJobExperiences,
            setPersonalDetails,
          })
        }
        className="btn btn-outline"
      />
    </div>
  );
};

export default FormControl;
