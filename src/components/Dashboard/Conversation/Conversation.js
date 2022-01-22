import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChevronDown, Copy, Share2, Trash } from "react-feather";
import useAuth from "../../../hooks/useAuth";
import profileImgEx from "../../Image/messageImg.jpeg";


const Conversation = ({ conversation, currentUser }) => {
  // Set logged in user conversation
  const [user, setUser] = useState(null);
  // See Messages in chat list
  const [chatListMsg, setChatListMsg] = useState(null);
  // See Messages in chat list
  const [chatListSingle, setChatListSingle] = useState(null);
  // See time stamp
  const [timeStamp, setTimeStamp] = useState(null);
  // Use Credentials
  const { messages } = useAuth();

  // Fetching by  user  id
  useEffect(() => {
    // Finding others user
    const friendId = conversation.members.find(
      (foundId) => foundId !== currentUser.data._id
    );
    const getUser = async () => {
      try {
        const res = await axios(
          "http://localhost:5000/api/userData/" + friendId
        );
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  // Getting  the Conversation  ID
  useEffect(() => {
    const getChatListMsg = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/conversations/" + user?.data?._id
        );
        setChatListMsg(res);
      } catch (error) {
        console.log(error);
      }
    };
    getChatListMsg();
  }, [user]);

  // Getting the last Messages for Chat list
  useEffect(() => {
    const getChatSingle = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/messages/" + chatListMsg?.data[0]?._id
        );
        setChatListSingle(res);
      } catch (error) {
        console.log(error);
      }
    };
    getChatSingle();
  }, [chatListMsg?.data[0]]);

  // Setup the time  stamp
  useEffect(() => {
    const created_at = new Date(chatListSingle?.data[0]?.createdAt);
    const gettingTime = created_at.getHours() + ":" + created_at.getMinutes();

    function tConvert(time) {
      // Check correct time format and split into components
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      setTimeStamp(time.join("")); // return adjusted time or original string
    }
    tConvert(gettingTime);
  }, [chatListSingle]);

  // Chat Option Toggler
  const triggerOption = (e) => {
    let chatListOption = e.target.parentElement.nextElementSibling;
    if (chatListOption) {
      chatListOption.style.opacity = 1;
      chatListOption.style.visibility = "visible";
      chatListOption.style.top = "-54px";
    }
  }

  return (
    <>
      <div className="intro-x mb-4">
        <div className="zoom-in">
          <div
            id="chatList"
            className="chat-list box cursor-pointer relative flex items-center px-4 py-3"
          >
            <div className="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Topson Messenger Tailwind HTML Admin Template"
                className="rounded-full"
                src={profileImgEx}
              />
              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
            </div>
            <div className="ml-2 overflow-hidden">
              <span className="font-medium">
                {user?.data.firstName} {user?.data.lastName}
              </span>
              <div className="text-opacity-80 w-4/5 truncate mt-0.5">
                {chatListSingle?.data[0]?.text}
              </div>
            </div>
            <div className="chatlist-timestamp">
              <div className="whitespace-nowrap text-opacity-80 text-xs">
                {timeStamp}
              </div>
              <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                <span className="dropdown-toggle block text-opacity-70 chatOptTrggr" onClick={triggerOption}>
                  {" "}
                  <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                </span>
                <div className="dropdown-menu w-40" id="chatlistOpt">
                  <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <span
                      href=""
                      className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <Trash className="w-4 h-4 mr-2" strokeWidth="1" /> Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
