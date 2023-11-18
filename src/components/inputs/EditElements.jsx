import { EditIcon } from "../Icons";

export default function EditElements({ array, field }) {
  return array.map((element, index) => {
    return (
      <div className="editElement" key={index}>
        <p>{element[field]}</p>
        <EditIcon />
      </div>
    );
  });
}
