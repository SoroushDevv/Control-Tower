import React from "react";

const Radio = ({ name, options = [], selected, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label key={opt.value} className="inline-flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
            className="form-radio text-blue-500"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
