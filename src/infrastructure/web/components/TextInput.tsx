import React from 'react';

interface Props {
  label:string
  value:string
  typeInput: "text" | "password"
  onChange: ()=> void
}


const TextInput = (props:Props)=>{
  return (
    <>
      <div>
        <label htmlFor="">
          {props.label}
        </label>
        <input type={props.typeInput} />
      </div>
    </>
  )
}

export default TextInput