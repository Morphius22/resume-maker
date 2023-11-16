import { PhoneIcon, EmailIcon, AddressIcon } from "../Icons";

function ResumePersonalDetails({ personalDetails }) {
  return (
    <div className="resumeHeader">
      <h3 className="resumeName">{personalDetails.fullName}</h3>
      <div className="resumePersonDetailsSection">
        <div className="resumePersonDetail">
          <EmailIcon />
          <p>{personalDetails.email}</p>
        </div>
        <div className="resumePersonDetail">
          <PhoneIcon />
          <p>{personalDetails.phoneNumber}</p>
        </div>
        <div className="resumePersonDetail">
          <AddressIcon />
          <p>{personalDetails.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumePersonalDetails;
