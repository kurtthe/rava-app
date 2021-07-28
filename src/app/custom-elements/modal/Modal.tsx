import React from 'react';
import './modal.scss';

interface Props {
  children: any
  show: boolean;
}

const Modal = (props: Props) => {
  return (
    <>
      {props.show && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__body">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
