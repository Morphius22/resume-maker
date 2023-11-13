export default function ResumeSchoolDetails({ schoolName, degree }) {
  return (
    <div className="resumeSectionRightColumn">
      <p className="resumeSchoolName">{schoolName}</p>
      <p className="resumeSchoolDegree">{degree}</p>
    </div>
  );
}
