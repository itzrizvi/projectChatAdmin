import React from "react";
import supportImg from "../Image/ezgif.com-gif-maker.jpg";
import "./Support.css";

const Support = () => {
  return (
    <>
      <img src={supportImg} className="card-img-top p-4" alt="..." />
      <div className="custom-card card-body border-top">
        <h6 className="support-tag-1">Ultimate Modern Support Tech Stack</h6>
        <p className="card-text text-secondary" style={{ fontSize: "14px" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </>
  );
};

export default Support;
