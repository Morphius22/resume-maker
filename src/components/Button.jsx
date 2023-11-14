export default function Button({ buttonText, className, onClick }) {
  return (
    <button className={`btn ${className}`} onClick={(e) => onClick(e)}>
      {buttonText}
    </button>
  );
}
