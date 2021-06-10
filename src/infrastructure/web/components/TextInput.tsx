import React from "react";
import { FontAwesome } from "react-web-vector-icons";
interface Props {
  label: string;
  value: string;
  icon?: string | undefined;
  typeInput?: "text" | "password";
  onChange: () => void;
}

const TextInput = (props: Props) => {
  const putContent = () => {
    if (!props.icon) {
      return <input type={!props.typeInput ? "text" : props.typeInput} />;
    }

    return (
      <div className="textinput__icon">
        <FontAwesome name={props.icon} color="white" size={20} />
        <input type={!props.typeInput ? "text" : props.typeInput} />
      </div>
    );
  };

  return (
    <>
      <div className="textinput">
        <label htmlFor="">{props.label}</label>
        {putContent()}
      </div>
    </>
  );
};

export default TextInput;
