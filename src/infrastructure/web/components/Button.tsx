import React from 'react';

interface Props{
 type: "primary" | "secondary" | "warning" | "info"
 disabled?: boolean
 label: string
 onClick: (event?:any)=>void
 className?: string
}

const Button = (props:Props)=>{

  return (
    <>
      <button className={`btn-${props.type} ${(props.className) && props.className}` }>
        {props.label || 'Button'}
      </button>
    </>
  )
}

export default Button