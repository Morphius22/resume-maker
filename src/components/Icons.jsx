import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAddressCard,
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

export { PhoneIcon, EmailIcon, AddressIcon };
