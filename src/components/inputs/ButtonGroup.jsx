import Button from "../Button";

export default function ButtonGroup({
  saveButtonHandler,
  clearButtonHandler,
  arrayToSaveTo,
  setterFuction,
}) {
  return (
    <div className="buttonGroup">
      <Button
        className="deleteButton btn-outline"
        buttonText="Clear"
        onClick={() => clearButtonHandler(arrayToSaveTo, setterFuction)}
      />
      <div className="cancelSaveButtons">
        <Button
          className="saveButton btn-primary"
          buttonText="Save"
          onClick={() => saveButtonHandler(arrayToSaveTo, setterFuction)}
        />
      </div>
    </div>
  );
}
