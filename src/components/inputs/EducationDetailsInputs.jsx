import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import TextInput from "../TextInput";
import Accordian from "../Accordian";
import EditElements from "./EditElements";

function EducationDetailsInputs({
  educationExperiences,
  setEducationExperiences,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEducationIndex, setSelectedEducationIndex] = useState(2);
  const [editedEducationItem, setEditedEducationItem] = useState(
    educationExperiences[selectedEducationIndex]
  );

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
    setEditedEducationItem(
      newEducationExperiences[newEducationExperiences.length - 1]
    );
    setSelectedEducationIndex(newEducationExperiences.length - 1);
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e, field) => {
    const copyOfEditedEducationItem = { ...editedEducationItem };
    const educationExperiencesArray = [...educationExperiences];
    copyOfEditedEducationItem[field] = e.target.value;
    setEditedEducationItem(copyOfEditedEducationItem);
    educationExperiencesArray[selectedEducationIndex] =
      copyOfEditedEducationItem;
    setEducationExperiences(educationExperiencesArray);
  };

  const clearEducationForm = (
    educationExperiences,
    setEducationExperiences
  ) => {
    const latestEducationExperience = [...educationExperiences];
    const clearedItem = {
      schoolLocation: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schoolName: "",
      degree: "",
    };
    latestEducationExperience[selectedEducationIndex] = clearedItem;
    setEducationExperiences(latestEducationExperience);
    setEditedEducationItem(clearedItem);
  };

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian
        label="Education"
        icon="📚"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* if isOpen is false, display each element in the resume and an edit button */}
      {!isOpen && (
        <EditElements
          array={educationExperiences}
          field="schoolName"
          setSelectedIndex={setSelectedEducationIndex}
          setEditedItem={setEditedEducationItem}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      {/* if isOpen is true, display form details */}
      {isOpen && (
        <>
          <TextInput
            name="schoolName"
            id="schoolName"
            label="School Name"
            onChange={handleInputChange}
            value={editedEducationItem.schoolName}
          />
          <TextInput
            name="degree"
            id="degree"
            label="Degree"
            onChange={handleInputChange}
            value={editedEducationItem.degree}
          />
          <TextInput
            name="schoolStartDate"
            id="schoolStartDate"
            label="Start Date"
            onChange={handleInputChange}
            value={editedEducationItem.schoolStartDate}
          />
          <TextInput
            name="schoolEndDate"
            id="schoolEndDate"
            label="End Date"
            onChange={handleInputChange}
            value={editedEducationItem.schoolEndDate}
          />
          <TextInput
            name="schoolLocation"
            id="schoolLocation"
            label="Location"
            onChange={handleInputChange}
            value={editedEducationItem.schoolLocation}
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
