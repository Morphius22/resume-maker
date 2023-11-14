import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import TextInput from "../TextInput";
import Accordian from "../Accordian";

function EducationDetailsInputs({
  educationExperiences,
  setEducationExperiences,
  saveEducationExperience,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e, field) => {
    const newEducationExperiences = [...educationExperiences];
    const lastEducationExperience =
      newEducationExperiences[newEducationExperiences.length - 1];
    lastEducationExperience[field] = e.target.value;
    newEducationExperiences[newEducationExperiences.length - 1] =
      lastEducationExperience;
    setEducationExperiences(newEducationExperiences);
  };

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian
        label="Education"
        icon="📚"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <>
          <TextInput
            name="schoolName"
            id="schoolName"
            label="School Name"
            onChange={handleInputChange}
          />
          <TextInput
            name="degree"
            id="degree"
            label="Degree"
            onChange={handleInputChange}
          />
          <TextInput
            name="schoolStartDate"
            id="schoolStartDate"
            label="Start Date"
            onChange={handleInputChange}
          />
          <TextInput
            name="schoolEndDate"
            id="schoolEndDate"
            label="End Date"
            onChange={handleInputChange}
          />
          <TextInput
            name="schoolLocation"
            id="schoolLocation"
            label="Location"
            onChange={handleInputChange}
          />
          <ButtonGroup
            saveButtonHandler={saveEducationExperience}
            arrayToSaveTo={educationExperiences}
            setterFuction={setEducationExperiences}
          />
        </>
      )}
    </div>
  );
}

export default EducationDetailsInputs;
