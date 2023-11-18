import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Accordian from "../Accordian";
import TextInput from "../TextInput";
import EditElements from "./EditElements";

function WorkDetailsInputs({
  jobExperiences,
  setJobExperiences,
  saveWorkExperience,
  clearWorkForm,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e, field) => {
    const newJobExperiences = [...jobExperiences];
    const lastJobExperience = newJobExperiences[newJobExperiences.length - 1];
    lastJobExperience[field] = e.target.value;
    newJobExperiences[newJobExperiences.length - 1] = lastJobExperience;
    setJobExperiences(newJobExperiences);
  };

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian
        icon="&#9874;"
        label="Experience"
        onClick={() => setIsOpen(!isOpen)}
      />

      {!isOpen && <EditElements array={jobExperiences} field="companyName" />}
      {isOpen && (
        <>
          <TextInput
            name="companyName"
            id="companyName"
            label="Company Name"
            onChange={handleInputChange}
            value={jobExperiences[jobExperiences.length - 1].companyName}
          />
          <TextInput
            name="position"
            id="position"
            label="Position"
            onChange={handleInputChange}
            value={jobExperiences[jobExperiences.length - 1].position}
          />
          <TextInput
            name="workStartDate"
            id="workStartDate"
            label="Start Date"
            onChange={handleInputChange}
            value={jobExperiences[jobExperiences.length - 1].workStartDate}
          />
          <TextInput
            name="workEndDate"
            id="workEndDate"
            label="End Date"
            onChange={handleInputChange}
            value={jobExperiences[jobExperiences.length - 1].workEndDate}
          />
          <TextInput
            name="workLocation"
            id="workLocation"
            label="Location"
            onChange={handleInputChange}
            value={jobExperiences[jobExperiences.length - 1].workLocation}
          />
          <TextInput
            name="workDescription"
            id="workDescription"
            label="Description (Optional)"
            onChange={handleInputChange}
            value={jobExperiences[jobExperiences.length - 1].workDescription}
          />
          <ButtonGroup
            saveButtonHandler={saveWorkExperience}
            clearButtonHandler={clearWorkForm}
            arrayToSaveTo={jobExperiences}
            setterFuction={setJobExperiences}
          />
        </>
      )}
    </div>
  );
}

export default WorkDetailsInputs;
