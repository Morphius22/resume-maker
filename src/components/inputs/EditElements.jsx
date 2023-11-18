import { EditIcon } from "../Icons";

export default function EditElements({ array, field }) {
  return array.map((element, index) => {
    if (element[field] === "") return null;
    return (
      <div className="editElement" key={index}>
        <p>{element[field]}</p>
        <EditIcon />
      </div>
    );
  });
}
