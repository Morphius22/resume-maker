import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAddressCard,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const PhoneIcon = () => {
  return <FontAwesomeIcon icon={faPhone} className="icon" />;
};

const EmailIcon = () => {
  return <FontAwesomeIcon icon={faEnvelope} className="icon" />;
};

const AddressIcon = () => {
  return <FontAwesomeIcon icon={faAddressCard} className="icon" />;
};

const EditIcon = ({ onClick }) => {
  return <FontAwesomeIcon icon={faEdit} className="icon" onClick={onClick} />;
};

export { PhoneIcon, EmailIcon, AddressIcon, EditIcon };
