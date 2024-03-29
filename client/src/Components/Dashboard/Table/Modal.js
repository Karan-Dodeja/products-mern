import React from "react";
import "./Modal.css";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h1>Product Description</h1>
        <div className="modal-border"></div>
      </div>
      <div className="modal-description">
        <h2 className="modal-description-header">Chemistry 1 - Process 1.1</h2>
        <p className="modal-description-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};
