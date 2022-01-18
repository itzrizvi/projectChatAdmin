import "animate.css";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import messegeIcon from "../../images/message-icon.png";
import MessageDetails from "../MessageDetails/MessageDetails";
import Modal from "../modal/Modal";
import "./ChatModal.css";

const ChatModal = () => {
  // Chatbox open and close
  const [window, setWindow] = useState("modal");
  let Comp;
  if (window === "modal") {
    Comp = <Modal pageChange={setWindow} presentPage={window}></Modal>;
  } else if (window === "messageDetails") {
    Comp = (
      <MessageDetails
        pageChange={setWindow}
        presentPage={window}
      ></MessageDetails>
    );
  }

  const handleIcon = () => {};

  return (
    <div className="chat-modal" onClick={handleIcon}>
      <Popup
        trigger={(open) => (
          <button
            onClick={() => setWindow("modal")}
            className="button chat-icon"
          >
            <img src={messegeIcon} alt="CHATICON" />
          </button>
        )}
        position="top right"
        contentStyle={{ padding: "0px" }}
        arrow={false}
        nested
        closeOnDocumentClick={false}
        mouseEnterDelay={0}
      >
        {Comp}
      </Popup>
    </div>
  );
};

export default ChatModal;
