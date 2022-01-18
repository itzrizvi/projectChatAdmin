import { faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import prof2 from "../Image/m2essageImg.jpg";
import prof1 from "../Image/messageImg.jpeg";
import prof3 from "../Image/messageImg3.jpg";
import "./Message.css";

const Message = ({ pageCng, currPage }) => {
  // Font awesome icons
  const clockIcon = (
    <FontAwesomeIcon icon={faClock} className="fas fa-camera clock-Icon" />
  );
  const sendIcon = (
    <FontAwesomeIcon icon={faPaperPlane} className="fas fa-camera" />
  );

  return (
    <div className="container pb-3">
      <h5 className="pt-3 pb-2">
        <b>Start a conversation</b>
      </h5>
      <div className="message-comp-flex">
        <div className="image-holder">
          <img className="image1" src={prof1} alt="..." />
          <img className="image2" src={prof2} alt="..." />
          <img className="image3" src={prof3} alt="..." />
        </div>
        <div className="text-holder">
          <p className="text-secondary text-hold1" style={{ margin: 0 }}>
            Our usual reply time
          </p>
          <p className="text-hold2">
            {clockIcon}
            <b style={{ fontFamily: "Titillium Web" }}> A few minutes</b>
          </p>
        </div>
      </div>
      <div className="col">
        <button
          type="button"
          className="send-Icon"
          onClick={() => pageCng("messageDetails")}
        >
          {sendIcon} <b className="px-2">Send us message</b>{" "}
        </button>
      </div>
    </div>
  );
};

export default Message;
