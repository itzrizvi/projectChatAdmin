import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Camera, Mail, Mic, Plus, Send, Smile } from "react-feather";
import { format } from "timeago.js";
import useAuth from "../../../hooks/useAuth";
import profileImgEx from "../../Image/messageImg.jpeg";

const MainChat = () => {
  const { currentChat, messages, conversations, userData, setMessages } =
    useAuth();

  // Selected User State
  const [selectedUser, setSelectedUser] = useState(null);
  // New Message from admin
  const [newMessage, setNewMessage] = useState("");

  // Instant Message
  const [instantMSG, setInstantMSG] = useState([]);

  //
  const scrollRef = useRef();

  //  Reversing messages for sorting
  let messageSorted = messages?.data?.reverse();
  let instantMsgSorted = instantMSG?.reverse();

  // Finding Selected User details
  useEffect(() => {
    const selectedUserId = currentChat?.members.find(
      (selectedId) => selectedId !== userData.data._id
    );
    if (currentChat) {
      const getSelectedUser = async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/userData/" + selectedUserId
          );
          setSelectedUser(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getSelectedUser();
    }
  }, [userData, currentChat]);

  //
  const handleAdminMsgSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userData.data._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    setInstantMSG([...instantMSG, message]);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/messages/",
        message
      );
      setMessages([...messages, res]);
    } catch (error) {
      console.log(error);
    }
    e.target.value = "";
  };

  // Enter button press send msg function
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdminMsgSubmit(e);
      e.target.value = "";
    }
  };

  //
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, newMessage]);

  return (
    <>
      <div className="chat-box border-theme-5 col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6">
        {/* <!-- BEGIN: Chat Box Top Bar --> */}
        {currentChat ? (
          <>
            <div className="intro-y box border border-theme-3 dark:bg-dark-2 dark:border-dark-2 flex items-center px-5 py-4">
              <div className="flex items-center mr-auto text-left">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 w-3 h-3 absolute right-0 top-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="text-base font-medium">
                    {selectedUser && selectedUser.firstName}{" "}
                    {selectedUser && selectedUser.lastName}
                  </span>
                  <div className="text-gray-600">Online</div>
                </div>
              </div>
              <span className="text-gray-600 hover:text-theme-1 opacity-50">
                {" "}
                <Camera className="w-4 h-4 sm:w-6 sm:h-6" />
              </span>
              <span className="text-gray-600 hover:text-theme-1 ml-2 sm:ml-5 opacity-50">
                {" "}
                <Mic className="w-4 h-4 sm:w-6 sm:h-6" />
              </span>
            </div>
            {/* <!-- END: Chat Box Top Bar --> */}

            {/* <!-- BEGIN: Chat Box Content --> */}
            <div className="overflow-y-scroll scrollbar-hidden pt-5 flex-1">
              {/* ******************************************************** */}
              {/* <!-- BEGIN: Previous Chat Text --> */}
              <ul>
                {messageSorted?.map((message) => (
                  <li
                    ref={scrollRef}
                    className={
                      message?.sender !== userData?.data._id
                        ? "chat-text-box__content items-center left-side-chat"
                        : "chat-text-box__content items-center right-side-chat"
                    }
                  >
                    {/* <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                      <img
                        alt="Topson Messenger Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profileImgEx}
                      />
                    </div> */}
                    <div className="message-text">{message.text}</div>
                    <span
                      className={
                        message?.sender !== userData?.data._id
                          ? "admin-msg-time-left"
                          : "admin-msg-time-right"
                      }
                    >
                      {format(message?.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
              {/* <!-- END: Previous Chat Text --> */}

              {/* <!-- Start: Instant Chat Text --> */}
              {instantMSG ? (
                <ul>
                  {instantMsgSorted?.map((message) => (
                    <>
                      {currentChat?._id === message.conversationId ? (
                        <li
                          ref={scrollRef}
                          className={
                            message?.sender !== userData?.data._id
                              ? "chat-text-box__content items-center left-side-chat"
                              : "chat-text-box__content items-center right-side-chat"
                          }
                        >
                          {/* <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                      <img
                        alt="Topson Messenger Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={profileImgEx}
                      />
                    </div> */}
                          <div className="message-text">{message.text}</div>
                          <span
                            className={
                              message?.sender !== userData?.data._id
                                ? "admin-msg-time-left"
                                : "admin-msg-time-right"
                            }
                          >
                            {format(message?.createdAt)}
                          </span>
                        </li>
                      ) : null}
                    </>
                  ))}
                </ul>
              ) : null}

              {/* <!-- END: Instant Chat Text --> */}

              <div className="clear-both"></div>

              <div className="intro-y text-gray-500 text-xs text-center mb-6 mt-5">
                12 June 2020
              </div>

              <div className="clear-both"></div>

              <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                </div>
                <div className="w-full text-left">
                  <div>
                    <div className="chat-text-box__content flex items-center float-left">
                      <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                        John Travolta is typing
                        <span className="typing-dots ml-1">
                          {" "}
                          <span>.</span> <span>.</span> <span>.</span>{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END: Chat Text --> */}

              {/* ******************************************************** */}
              {/* <!-- BEGIN: Chat Text --> */}
            </div>
            {/* <!-- END: Chat Box Content --> */}

            {/* <!-- BEGIN: Chat Box Input --> */}
            <form className="admin-message-form">
              <div className="intro-y chat-input box border-theme-3 dark:bg-dark-2 dark:border-dark-2 border flex items-center px-5 py-4">
                {/* <!-- BEGIN: Chat Input Dropdown --> */}
                <div className="dropdown relative" data-placement="top">
                  <span className="text-gray-600 hover:text-theme-1 dropdown-toggle">
                    {" "}
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 opacity-50" />
                  </span>
                  <div className="chat-input__dropdown dropdown-menu">
                    <div className="dropdown-menu__content p-2">
                      <span className="input-box-icon shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2">
                        {" "}
                        <Camera className="w-5 h-5 opacity-50" />
                      </span>
                      <span className="input-box-icon shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2">
                        {" "}
                        <Mic className="w-5 h-5 opacity-50" />
                        <i data-feather="mic" className="w-5 h-5"></i>{" "}
                      </span>
                      <span className="input-box-icon shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2">
                        {" "}
                        <Mail className="w-5 h-5 opacity-50" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- END: Chat Input Dropdown --> */}
                <textarea
                  className="form-control h-12 shadow-none resize-none border-transparent px-5 py-3 focus:shadow-none truncate mr-3 sm:mr-0"
                  rows="1"
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                ></textarea>
                {/* <!-- BEGIN: Chat Smiley Dropdown --> */}
                <div
                  className="dropdown relative mr-3 sm:mr-5"
                  data-placement="top-end"
                >
                  <span className="text-gray-600 hover:text-theme-1 dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block">
                    {" "}
                    <Smile className="w-full h-full opacity-50" />
                  </span>
                </div>
                {/* <!-- END: Chat Smiley Dropdown --> */}
                <button
                  type="submit"
                  className="admin-message-submit"
                  onClick={handleAdminMsgSubmit}
                >
                  <span className="bg-theme-1 text-white w-8 h-8 sm:w-10 sm:h-10 block rounded-full flex-none flex items-center justify-center">
                    <Send className="-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <span className="openConversation">Open A Conversation</span>
        )}
        {/* <!-- END: Chat Box Input --> */}
      </div>
    </>
  );
};

export default MainChat;
