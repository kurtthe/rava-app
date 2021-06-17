import React from "react";

interface Props {
  label: string;
  placeholder: string;
  options: Array<string>;
}

const Select = (props: Props) => {
  return (
    <>
      <div className="select">
        <label>{props.label}</label>
        <select placeholder="Select">
          <option value="" disabled selected>
            {props.placeholder}
          </option>
          {props.options.map((item: string) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
