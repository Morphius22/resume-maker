export default function ResumeLeftColumn({ date, location }) {
  return (
    <>
      <div className="resumeSectionLeftColumn">
        <p className="resumeDate">{date}</p>
        <p className="resumeLocation">{location}</p>
      </div>
    </>
  );
}
