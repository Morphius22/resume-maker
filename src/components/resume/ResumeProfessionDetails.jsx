import ResumeLeftColumn from "./ResumeLeftColumn";
import ResumeWorkDetails from "./ResumeWorkDetails";
import ResumeSectionHeader from "./ResumeSectionHeader";

function ResumeProfessionDetails({ jobExperiences }) {
  return (
    <>
      <div className="resumeSection">
        <ResumeSectionHeader headerName="Professional Experience" />

        {jobExperiences.map(
          (job, index) =>
            job.companyName !== "" && (
              <div className="resumeSectionDetails" key={index}>
                <ResumeLeftColumn
                  startDate={job.workStartDate}
                  endDate={job.workEndDate}
                  location={job.workLocation}
                />
                <ResumeWorkDetails
                  company={job.companyName}
                  jobTitle={job.position}
                  jobDescription={job.workDescription}
                />
              </div>
            )
        )}
      </div>
    </>
  );
}

export default ResumeProfessionDetails;
