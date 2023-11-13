import "../styles/app.css";
import { useState } from "react";

export default function Accordian({ icon, label, onClick }) {
  return (
    <div className="accordian" onClick={onClick}>
      <h4 className="sectionheader">
        {icon}
        {label}
      </h4>
      <span className="accordianIcon">&#x25BC;</span>
    </div>
  );
}
