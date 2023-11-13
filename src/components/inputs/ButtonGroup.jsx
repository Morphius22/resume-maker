import Button from "../Button";

export default function ButtonGroup() {
  return (
    <div className="buttonGroup">
      <Button className="deleteButton btn-outline" buttonText="Clear" />
      <div className="cancelSaveButtons">
        <Button className="saveButton btn-primary" buttonText="Save" />
      </div>
    </div>
  );
}
