import React from "react";

interface Props {
  mode: "outline" | "contained" | "rounded";
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
    <button className={classButton} onClick={(event)=>props.onClick(event)}>
      {props.label || "Button"}
    </button>
  );
};

export default Button;
