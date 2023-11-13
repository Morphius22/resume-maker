import ResumeLeftColumn from "./ResumeLeftColumn";
import ResumeWorkDetails from "./ResumeWorkDetails";
import ResumeSectionHeader from "./ResumeSectionHeader";

function ResumeProfessionDetails({ jobExperiences }) {
  return (
    <>
      <div className="resumeSection">
        <ResumeSectionHeader headerName="Professional Experience" />

        {jobExperiences.map((job, index) => (
          <div className="resumeSectionDetails" key={index}>
            <ResumeLeftColumn date={job.date} location={job.location} />
            <ResumeWorkDetails
              company={job.company}
              jobTitle={job.jobTitle}
              jobDescription={job.jobDescription}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResumeProfessionDetails;
