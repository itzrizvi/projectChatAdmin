import React from "react";
import newInter from "../Image/whatsNew.jpg";
import "./NewInIntercom.css";

const NewInIntercom = () => {
  return (
    <>
      <div className="blog-post-title">
        <h5>Build for you- New in Intercom</h5>
      </div>
      <div className="blog-post-details">
        <div className="custom-flex">
          <div className="align-items-center">
            <img src={newInter} alt="..." />
          </div>
          <div className="blog-detail ms-2">
            <p className="text-primary newIntern-tag-1">
              Automatically create salesforce cases from conversations in
              Intercom 🚀
            </p>
            <p className="text-secondary newIntern-tag-2">
              Keep your support team operating...
            </p>
          </div>
        </div>
      </div>
      <div className="blog-post-details">
        <div className="custom-flex">
          <div className="align-items-center">
            <img src={newInter} alt="..." />
          </div>
          <div className="blog-detail ms-2">
            <p className="text-primary newIntern-tag-1">
              Automatically create salesforce cases from conversations in
              Intercom 🚀
            </p>
            <p className="text-secondary newIntern-tag-2">
              Keep your support team operating...
            </p>
          </div>
        </div>
      </div>
      <div className="blog-post-details">
        <div className="custom-flex">
          <div className="align-items-center">
            <img src={newInter} alt="..." />
          </div>
          <div className="blog-detail ms-2">
            <p className="text-primary newIntern-tag-1">
              Automatically create salesforce cases from conversations in
              Intercom 🚀
            </p>
            <p className="text-secondary newIntern-tag-2">
              Keep your support team operating...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewInIntercom;
