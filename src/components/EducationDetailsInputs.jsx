import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import TextInput from "./TextInput";
import Accordian from "./Accordian";
import "../styles/app.css";

function EducationDetailsInputs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian
        label="Education"
        icon="📚"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <>
          <TextInput name="schoolName" id="schoolName" label="School Name" />
          <TextInput name="degree" id="degree" label="Degree" />
          <TextInput
            name="schoolStartDate"
            id="schoolStartDate"
            label="Start Date"
          />
          <TextInput name="schoolEndDate" id="schoolEndDate" label="End Date" />
          <TextInput
            name="schoolLocation"
            id="schoolLocation"
            label="Location"
          />
          <ButtonGroup />
        </>
      )}
    </div>
  );
}

export default EducationDetailsInputs;
