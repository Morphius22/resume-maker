import Button from "../Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FormControl = ({
  clearResumeHandler,
  loadExampleResumeHandler,
  setJobExperiences,
  setEducationExperiences,
  setPersonalDetails,
}) => {
  function downloadResumeAsPDF() {
    const resumeElement = document.querySelector(".resume");
    html2canvas(resumeElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // create A4 portrait pdf
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      const aspectRatio = width / height;
      const canvasAspectRatio = canvas.width / canvas.height;
      let imgWidth;
      let imgHeight;
      if (canvasAspectRatio > aspectRatio) {
        imgWidth = width;
        imgHeight = imgWidth / canvasAspectRatio;
      } else {
        imgHeight = height;
        imgWidth = imgHeight * canvasAspectRatio;
      }
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  }

  return (
    <div className="formControl buttonGroup">
      <Button
        buttonText="Clear Resume"
        onClick={() =>
          clearResumeHandler({
            setEducationExperiences,
            setJobExperiences,
            setPersonalDetails,
          })
        }
        className="btn btn-primary"
      />
      <Button
        buttonText="Load Example"
        onClick={() =>
          loadExampleResumeHandler({
            setEducationExperiences,
            setJobExperiences,
            setPersonalDetails,
          })
        }
        className="btn btn-outline"
      />
      <Button
        buttonText="Download Resume"
        className="btn btn-outline"
        onClick={downloadResumeAsPDF}
      />
    </div>
  );
};

export default FormControl;
