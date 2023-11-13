import Button from "./Button";

export default function ButtonGroup() {
  return (
    <div className="buttonGroup">
      <Button className="deleteButton btn-outline" buttonText="Clear Form" />
      <div className="cancelSaveButtons">
        <Button className="cancelButton btn-outline" buttonText="Cancel" />
        <Button className="saveButton btn-primary" buttonText="Save" />
      </div>
    </div>
  );
}
