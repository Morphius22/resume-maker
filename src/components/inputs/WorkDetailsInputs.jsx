import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Accordian from "../Accordian";
import TextInput from "../TextInput";

function WorkDetailsInputs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian
        icon="&#9874;"
        label="Experience"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <>
          <TextInput name="companyName" id="companyName" label="Company Name" />
          <TextInput name="position" id="position" label="Position" />
          <TextInput
            name="workStartDate"
            id="workStartDate"
            label="Start Date"
          />
          <TextInput name="workEndDate" id="workEndDate" label="End Date" />
          <TextInput name="workLocation" id="workLocation" label="Location" />
          <TextInput
            name="workDescription"
            id="workDescription"
            label="Description (Optional)"
          />
          <ButtonGroup />
        </>
      )}
    </div>
  );
}

export default WorkDetailsInputs;
