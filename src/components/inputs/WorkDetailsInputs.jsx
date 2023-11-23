import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Accordian from "../Accordian";
import TextInput from "../TextInput";
import EditElements from "./EditElements";

function WorkDetailsInputs({
  jobExperiences,
  setJobExperiences,
  // saveWorkExperience,
  // clearWorkForm,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(2);
  const [editedWorkItem, setEditedWorkItem] = useState(
    jobExperiences[selectedWorkIndex]
  );

  const handleInputChange = (e, field) => {
    // make copy of edited item
    const workItemBeingEdited = { ...editedWorkItem };
    // make copy of array
    const jobExperiencesArray = [...jobExperiences];
    // update edited item with field value
    workItemBeingEdited[field] = e.target.value;
    // set updated item as the item
    setEditedWorkItem(workItemBeingEdited);
    // set array at specific index to updated item
    jobExperiencesArray[selectedWorkIndex] = workItemBeingEdited;

    setJobExperiences(jobExperiencesArray);
  };

  const saveWorkExperience = (jobExperiences, setJobExperiences) => {
    const newJobExperiences = [...jobExperiences];
    newJobExperiences.push({
      position: "",
      companyName: "",
      workStartDate: "",
      workEndDate: "",
      workLocation: "",
      workDescription: "",
    });
    setJobExperiences(newJobExperiences);
    setEditedWorkItem(newJobExperiences[newJobExperiences.length - 1]);
    setSelectedWorkIndex(newJobExperiences.length - 1);
    setIsOpen(!isOpen);
  };

  const clearWorkForm = (jobExperiences, setJobExperiences) => {
    const latestJobExperience = [...jobExperiences];
    const clearedItem = {
      position: "",
      companyName: "",
      workStartDate: "",
      workEndDate: "",
      workLocation: "",
      workDescription: "",
    };
    latestJobExperience[selectedWorkIndex] = clearedItem;
    setJobExperiences(latestJobExperience);
    setEditedWorkItem(clearedItem);
  };

  return (
    <div className="section personal card w-96 bg-neutral text-neutral-content p-3">
      <Accordian
        icon="&#9874;"
        label="Experience"
        onClick={() => setIsOpen(!isOpen)}
      />

      {!isOpen && (
        <EditElements
          array={jobExperiences}
          field="companyName"
          setSelectedIndex={setSelectedWorkIndex}
          setEditedItem={setEditedWorkItem}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpen && (
        <>
          <TextInput
            name="companyName"
            id="companyName"
            label="Company Name"
            onChange={handleInputChange}
            value={editedWorkItem.companyName}
          />
          <TextInput
            name="position"
            id="position"
            label="Position"
            onChange={handleInputChange}
            value={editedWorkItem.position}
          />
          <TextInput
            name="workStartDate"
            id="workStartDate"
            label="Start Date"
            onChange={handleInputChange}
            value={editedWorkItem.workStartDate}
          />
          <TextInput
            name="workEndDate"
            id="workEndDate"
            label="End Date"
            onChange={handleInputChange}
            value={editedWorkItem.workEndDate}
          />
          <TextInput
            name="workLocation"
            id="workLocation"
            label="Location"
            onChange={handleInputChange}
            value={editedWorkItem.workLocation}
          />
          <TextInput
            name="workDescription"
            id="workDescription"
            label="Description (Optional)"
            onChange={handleInputChange}
            value={editedWorkItem.workDescription}
          />
          <ButtonGroup
            saveButtonHandler={saveWorkExperience}
            clearButtonHandler={() =>
              clearWorkForm(jobExperiences, setJobExperiences)
            }
            arrayToSaveTo={jobExperiences}
            setterFuction={setJobExperiences}
          />
        </>
      )}
    </div>
  );
}

export default WorkDetailsInputs;
