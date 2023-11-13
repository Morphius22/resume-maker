import { useState } from "react";
import "../styles/app.css";

export default function TextInput({ name, id, label }) {
  return (
    <>
      <div className="field my-8">
        <label className="label" htmlFor={name}>
          <span className="label-text">{label}</span>
        </label>
        <input
          type="text"
          id={id}
          name={name}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
}
