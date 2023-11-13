import ResumeLeftColumn from "./ResumeLeftColumn";
import ResumeSchoolDetails from "./ResumeSchoolDetails";
import ResumeSectionHeader from "./ResumeSectionHeader";

function ResumeEducationDetails({ educationExperiences }) {
  return (
    <div className="resumeSection">
      <ResumeSectionHeader headerName="Education" />
      {educationExperiences.map((education, index) => (
        <div className="resumeSectionDetails" key={index}>
          <ResumeLeftColumn
            date={education.date}
            location={education.location}
          />
          <ResumeSchoolDetails
            schoolName={education.schoolName}
            degree={education.degree}
          />
        </div>
      ))}
    </div>
  );
}

export default ResumeEducationDetails;
