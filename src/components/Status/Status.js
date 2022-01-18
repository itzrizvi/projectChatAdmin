import React from "react";
import correctSign from "../../images/correct-sign.png";
import "./Status.css";

const Status = () => {
  return (
    <div className="container">
      <div className="bd-highlight">
        <div className="p-2 bd-highlight align-items-center check-right-icon">
          <img src={correctSign} alt="HHHH" />
        </div>
        <div className="w-100 bd-highlight">
          <div className="col">
            <p className="status-tag-1">Status: All System Operational</p>
            <p className="text-secondary status-tag-2">
              Updated Dec 16, 08 UTC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
