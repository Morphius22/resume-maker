import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import "../styles/app.css";
import Accordian from "./Accordian";
import TextInput from "./TextInput";

function PersonalDetailsInputs() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian label="Personal Details" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="accordianContent">
          <TextInput name="fullName" id="fullName" label="Full Name" />
          <TextInput name="email" id="email" label="Email" />
          <TextInput name="phone" id="phone" label="Phone Number" />
          <TextInput name="address" id="address" label="Address" />
          <ButtonGroup />
        </div>
      )}
    </div>
  );
}

export default PersonalDetailsInputs;
