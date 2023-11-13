import "../styles/app.css";

export default function Button({ buttonText, className }) {
  return <button className={`btn ${className}`}>{buttonText}</button>;
}
