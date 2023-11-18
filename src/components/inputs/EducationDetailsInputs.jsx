import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import TextInput from "../TextInput";
import Accordian from "../Accordian";
import EditElements from "./EditElements";

function EducationDetailsInputs({
  educationExperiences,
  setEducationExperiences,
  saveEducationExperience,
  clearEducationForm,
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
      <EditElements array={educationExperiences} field="schoolName" />
      {isOpen && (
        <>
          <TextInput
            name="schoolName"
            id="schoolName"
            label="School Name"
            onChange={handleInputChange}
            value={
              educationExperiences[educationExperiences.length - 1].schoolName
            }
          />
          <TextInput
            name="degree"
            id="degree"
            label="Degree"
            onChange={handleInputChange}
            value={educationExperiences[educationExperiences.length - 1].degree}
          />
          <TextInput
            name="schoolStartDate"
            id="schoolStartDate"
            label="Start Date"
            onChange={handleInputChange}
            value={
              educationExperiences[educationExperiences.length - 1]
                .schoolStartDate
            }
          />
          <TextInput
            name="schoolEndDate"
            id="schoolEndDate"
            label="End Date"
            onChange={handleInputChange}
            value={
              educationExperiences[educationExperiences.length - 1]
                .schoolEndDate
            }
          />
          <TextInput
            name="schoolLocation"
            id="schoolLocation"
            label="Location"
            onChange={handleInputChange}
            value={
              educationExperiences[educationExperiences.length - 1]
                .schoolLocation
            }
          />
          <ButtonGroup
            saveButtonHandler={saveEducationExperience}
            arrayToSaveTo={educationExperiences}
            setterFuction={setEducationExperiences}
            clearButtonHandler={clearEducationForm}
          />
        </>
      )}
    </div>
  );
}

export default EducationDetailsInputs;
