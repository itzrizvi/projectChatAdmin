import React from "react";
import { Outlet } from "react-router-dom";
import "../../../assets/css/app.css";
import DHeader from "../DHeader/DHeader";
import MainChat from "../MainChat/MainChat";
import RightInfo from "../RightInfo/RightInfo";

const Dashboard = () => {
  return (
    <>
      {/* Chat  Dashboard Header */}
      <DHeader />
      <div className="md:pl-16 pt-16">
        <div className="-mt-16 ml-auto xl:-ml-16 mr-auto xl:pl-16 pt-16 xl:h-screen w-auto sm:w-3/5 xl:w-auto grid grid-cols-12 gap-6">
          {/* <!-- BEGIN: Side Content Profile --> */}

          <Outlet />

          {/* <!-- END: Side Content Profile --> */}

          {/* <!-- BEGIN: Side Content Chats --> */}

          {/* <!-- END: Side Content Chats --> */}
          {/* <Outlet /> */}
          {/* <!-- BEGIN: Chat Box --> */}
          <MainChat />
          {/* <!-- END: Chat Box --> */}
          {/* <!-- BEGIN: Right Content Info --> */}
          <RightInfo />
          {/* <!-- END: Right Content Info --> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
