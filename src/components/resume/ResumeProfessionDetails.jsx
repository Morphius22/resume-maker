import ResumeLeftColumn from "./ResumeLeftColumn";
import ResumeWorkDetails from "./ResumeWorkDetails";
import ResumeSectionHeader from "./ResumeSectionHeader";

function ResumeProfessionDetails() {
  return (
    <>
      <div className="resumeSection">
        <ResumeSectionHeader headerName="Professional Experience" />

        <div className="resumeSectionDetails">
          <ResumeLeftColumn
            date="08/2020 – present"
            location="New York City, US"
          />

          <ResumeWorkDetails
            company="Umbrella Inc."
            jobTitle="UI & UX Designer"
            jobDescription="Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android"
          />
        </div>
      </div>
      <div className="resumeSection">
        <div className="resumeSectionDetails">
          <ResumeLeftColumn
            date="08/2020 – present"
            location="New York City, US"
          />
          <ResumeWorkDetails
            company="Black Mesa Labs"
            jobTitle="Front End Engineer"
            jobDescription="Supported senior researchers on accessibility standards for the
            open web. Created and usability tested wireframes and prototypes.
            Produced interactive documentation for quick onboarding of new
            researchers."
          />
        </div>
      </div>
    </>
  );
}

export default ResumeProfessionDetails;
