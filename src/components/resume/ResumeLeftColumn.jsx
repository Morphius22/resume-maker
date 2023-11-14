export default function ResumeLeftColumn({ startDate, endDate, location }) {
  return (
    <>
      <div className="resumeSectionLeftColumn">
        <p className="resumeDate">{startDate + " - " + endDate}</p>
        <p className="resumeLocation">{location}</p>
      </div>
    </>
  );
}
