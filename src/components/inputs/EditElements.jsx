import { EditIcon } from "../Icons";

export default function EditElements({
  array,
  field,
  selectedIndex,
  setSelectedIndex,
  setEditedItem,
  educationExperiences,
}) {
  return array.map((element, index) => {
    if (element[field] === "") return null;
    return (
      <div className="editElement" key={index}>
        <p>{element[field]}</p>
        <EditIcon
          onClick={() => {
            setSelectedIndex(index);
            setEditedItem(educationExperiences[index]);
            console.log(educationExperiences[index]);
          }}
        />
      </div>
    );
  });
}
