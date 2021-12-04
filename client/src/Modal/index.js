import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, data }) => {
  console.log('modaldata', data);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{data.event_name}</h1>
        </div>
        <div className="body">
          <p>Time : {data.time}</p>
        </div>
        <div>
          <p className="footer">
            Contact : {data.event_contact}</p>
        </div>
        <div className="footer">
          <p>Address : {data.location_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;