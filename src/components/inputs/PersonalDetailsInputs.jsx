import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Accordian from "../Accordian";
import TextInput from "../TextInput";

function PersonalDetailsInputs({
  personalDetails,
  setPersonalDetails,
  clearPersonalDetails,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (e, field) => {
    const newPersonalDetails = { ...personalDetails };
    newPersonalDetails[field] = e.target.value;
    setPersonalDetails(newPersonalDetails);
  };

  const savePersonalDetails = (
    personalDetails,
    setPersonalDetails,
    isOpen,
    setIsOpen
  ) => {
    let newPersonalDetails = { ...personalDetails };
    newPersonalDetails = {
      fullName: personalDetails.fullName,
      email: personalDetails.email,
      phoneNumber: personalDetails.phoneNumber,
      address: personalDetails.address,
    };
    setPersonalDetails(newPersonalDetails);
    setIsOpen(!isOpen);
  };

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian label="Personal Details" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="accordianContent">
          <TextInput
            name="fullName"
            id="fullName"
            label="Full Name"
            onChange={handleInputChange}
            value={personalDetails.fullName}
          />
          <TextInput
            name="email"
            id="email"
            label="Email"
            onChange={handleInputChange}
            value={personalDetails.email}
          />
          <TextInput
            name="phoneNumber"
            id="phoneNumber"
            label="Phone Number"
            onChange={handleInputChange}
            value={personalDetails.phoneNumber}
          />
          <TextInput
            name="address"
            id="address"
            label="Address"
            onChange={handleInputChange}
            value={personalDetails.address}
          />
          <ButtonGroup
            arrayToSaveTo={personalDetails}
            setterFuction={setPersonalDetails}
            saveButtonHandler={savePersonalDetails}
            clearButtonHandler={clearPersonalDetails}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </div>
  );
}

export default PersonalDetailsInputs;
