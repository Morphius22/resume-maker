import "../styles/app.css";

export default function TextInput({ name, id, label, onChange, value }) {
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
          onChange={(e) => onChange(e, name)}
          value={value}
        />
      </div>
    </>
  );
}
