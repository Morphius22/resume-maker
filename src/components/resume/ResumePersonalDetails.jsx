import { PhoneIcon, EmailIcon, AddressIcon } from "../Icons";

function ResumePersonalDetails() {
  return (
    <div className="resumeHeader">
      <h3 className="resumeName">full name</h3>
      <div className="resumePersonDetailsSection">
        <div className="resumePersonDetail">
          <EmailIcon />
          <p>email</p>
        </div>
        <div className="resumePersonDetail">
          <PhoneIcon />
          <p>phone</p>
        </div>
        <div className="resumePersonDetail">
          <AddressIcon />
          <p>address</p>
        </div>
      </div>
    </div>
  );
}

export default ResumePersonalDetails;
