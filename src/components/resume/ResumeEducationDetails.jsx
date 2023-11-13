import ResumeLeftColumn from "./ResumeLeftColumn";
import ResumeSchoolDetails from "./ResumeSchoolDetails";
import ResumeSectionHeader from "./ResumeSectionHeader";

function ResumeEducationDetails() {
  return (
    <div className="resumeSection">
      <ResumeSectionHeader headerName="Education" />

      <div className="resumeSectionDetails">
        <ResumeLeftColumn
          date="08/2020 – present"
          location="New York City, US"
        />
        <ResumeSchoolDetails
          schoolName="London City University"
          degree="Bachelors in Economics"
        />
      </div>
    </div>
  );
}

export default ResumeEducationDetails;
