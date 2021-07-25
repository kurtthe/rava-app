import React from "react";

interface Props {
  mode: "outline" | "contained";
  type: "primary" | "secondary" | "warning" | "info";
  label: string;
  onClick: (event?: any) => void;

  compact?: boolean;
  disabled?: boolean;
  className?: string;
}


const Button = (props: Props) => {
  let classButton= `btn-${props.mode}-${props.type}`

  if(props.className){
    classButton += ` ${props.className}`
  }
  
  return (
    <button className={classButton}>
      {props.label || "Button"}
    </button>
  );
};

export default Button;
