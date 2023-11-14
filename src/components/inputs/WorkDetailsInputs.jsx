import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Accordian from "../Accordian";
import TextInput from "../TextInput";

function WorkDetailsInputs({ jobExperiences, setJobExperiences }) {
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
      {isOpen && (
        <>
          <TextInput
            name="companyName"
            id="companyName"
            label="Company Name"
            onChange={handleInputChange}
          />
          <TextInput
            name="position"
            id="position"
            label="Position"
            onChange={handleInputChange}
          />
          <TextInput
            name="workStartDate"
            id="workStartDate"
            label="Start Date"
            onChange={handleInputChange}
          />
          <TextInput
            name="workEndDate"
            id="workEndDate"
            label="End Date"
            onChange={handleInputChange}
          />
          <TextInput
            name="workLocation"
            id="workLocation"
            label="Location"
            onChange={handleInputChange}
          />
          <TextInput
            name="workDescription"
            id="workDescription"
            label="Description (Optional)"
            onChange={handleInputChange}
          />
          <ButtonGroup />
        </>
      )}
    </div>
  );
}

export default WorkDetailsInputs;
