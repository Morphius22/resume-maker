import { EditIcon } from "../Icons";

export default function EditElements({
  array,
  field,
  setSelectedIndex,
  setEditedItem,
  isOpen,
  setIsOpen,
}) {
  return array.map((element, index) => {
    if (element[field] === "") return null;
    return (
      <div className="editElement" key={index}>
        <p>{element[field]}</p>
        <EditIcon
          onClick={() => {
            setSelectedIndex(index);
            setEditedItem(array[index]);
            setIsOpen(!isOpen);
            console.log(array[index]);
          }}
        />
      </div>
    );
  });
}
