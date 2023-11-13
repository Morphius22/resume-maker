export default function ResumeWorkDetails({
  company,
  jobTitle,
  jobDescription,
}) {
  return (
    <>
      <div className="resumeSectionRightColumn">
        <p className="resumeCompanyName">{company}</p>
        <p className="resumeJobTitle">{jobTitle}</p>
        <p className="resumeJobDescription">{jobDescription}</p>
      </div>
    </>
  );
}
