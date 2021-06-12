import React from "react";
import { FontAwesome } from "react-web-vector-icons";
interface Props {
  label: string;
  value: string;
  icon?: string | undefined;
  typeInput?: "text" | "password" | "multiline";
  placeholder?: string;
  helperText?: string;
  onChange: () => void;
}

const TextInput = (props: Props) => {
  const putContent = () => {
    if (props.typeInput == "multiline") {
      return <textarea placeholder={props.placeholder}></textarea>;
    }

    if (!props.icon) {
      return (
        <input type={!props.typeInput ? "text" : props.typeInput} placeholder={props.placeholder} />
      );
    }

    return (
      <div className="textinput__icon">
        <FontAwesome name={props.icon} color="white" size={20} />
        <input type={!props.typeInput ? "text" : props.typeInput} placeholder={props.placeholder} />
      </div>
    );
  };

  return (
    <>
      <div className="textinput">
        <label htmlFor="">{props.label}</label>
        {putContent()}
        <p className="text-xs">{props.helperText}</p>
      </div>
    </>
  );
};

export default TextInput;
