import React, {useState} from 'react';

import { AntDesign } from "react-web-vector-icons";

import './modal.scss';

interface Props {
  open: boolean;
  closeModal: ()=>void;
  children?: any;
  closeDissmiss?:boolean;
}

const Modal = (props: Props) => {
  
  const handleCloseModal = ()=>{
    props.closeModal()
  }
  
  
  return (
    <>
      {props.open && (
        <div className="modal" onClick={()=>(!props.closeDissmiss)? null: handleCloseModal()} >
          <div className="modal__content">
            <div className="modal__header">
              <button className="btn-close" onClick={()=>handleCloseModal()} >
                  <AntDesign name="close" color="#1F2044" size={20} />
              </button>
            </div>
            <div className="modal__body">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
