import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import topIcon from "../../images/top-icon.png";
import Message from "../Message/Message";
import NewInIntercom from "../NewInIntercom/NewInIntercom";
import SearchForHelp from "../SearchForHelp/SearchForHelp";
import Status from "../Status/Status";
import Support from "../Support/Support";
import "./Modal.css";

const Modal = ({ pageChange, presentPage }) => {
  return (
    <SimpleBar
      id="simple-bar"
      style={{ maxHeight: 700 }}
      autoHide={true}
      scrollbarMaxSize={90}
    >
      <div className="justify-content-center popup-content">
        <div className="fixedImg sticky-top"></div>

        <div className="chat-front-sec1 m-2 text-white headline animate__animated animate__slideInUp animate__delay-0.5s">
          <div className="top-Icon">
            <img src={topIcon} alt="TOPICON" />
          </div>
          <h3>
            <b>Hi</b> 👋
          </h3>
          <p>
            We help your business grow by <br /> connecting you to your
            customers
          </p>
        </div>
        <div className="chat-front-sec2 m-2 border-3 rounded bg-body message-part animate__animated animate__slideInUp animate__delay-0.7s">
          <Message pageCng={pageChange} currPage={presentPage}></Message>
        </div>
        <div className="chat-front-sec2 m-2 border-3 rounded bg-body search-part animate__animated animate__slideInUp animate__delay-0.9s">
          <SearchForHelp></SearchForHelp>
        </div>
        <div className="chat-front-sec3 m-2 border-3 rounded bg-body status-part animate__animated animate__slideInUp animate__delay-0.9s">
          <Status />
        </div>

        <div className="chat-front-sec4 m-2 border-3  rounded support-part animate__animated animate__slideInUp animate__delay-1s">
          <Support></Support>
        </div>

        <div className="chat-front-sec5 m-2 border-3  rounded bg-body new-intercom animate__animated animate__slideInUp animate__delay-2s">
          <NewInIntercom></NewInIntercom>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Modal;
