import axios from "axios";
import React, { useEffect, useState } from "react";
import { Camera, Mail, Mic, Plus, Send, Smile } from "react-feather";
import useAuth from "../../../hooks/useAuth";
import profileImgEx from "../../Image/messageImg.jpeg";

const MainChat = () => {
  const { currentChat, messages, conversations, userData } = useAuth();

  // Selected User State
  const [selectedUser, setSelectedUser] = useState(null);

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

  const filterUserMessages = messages?.data?.filter(
    (matchUser) => matchUser.sender === userData.data._id
  );

  const filterOtherMessages = messages?.data?.filter(
    (matchOther) => matchOther.sender !== userData.data._id
  );

  console.log(filterUserMessages);
  console.log(filterOtherMessages);

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
              {/* <!-- BEGIN: Chat Text --> */}
              <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                </div>
                <div className="w-full text-left">
                  <div>
                    <div className="chat-text-box__content items-center float-left">
                      {filterOtherMessages.map((singleMsg) => (
                        <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                          {singleMsg?.text}
                        </div>
                      ))}
                      {/* <div className="hidden sm:block dropdown relative ml-3 mt-3">
                        <span className="dropdown-toggle w-4 h-4">
                          <MoreVertical className="w-4 h-4" />
                        </span>
                        <div className="dropdown-menu w-40">
                          <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                            <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                              <CornerUpLeft className="w-4 h-4 mr-2" /> Reply
                            </span>
                            <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                              <Trash className="w-4 h-4 mr-2" /> Delete
                            </span>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="clear-both"></div>
                    <div className="chat-text-box__content flex items-center float-left">
                      <div className="box text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row items-center mt-3 p-3">
                        <div className="chat-text-box__content__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                          <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                          </div>
                        </div>
                        <div className="sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left">
                          <div className="text-gray-700 dark:text-gray-300 whitespace-nowrap font-medium">
                            preview-8.jpg
                          </div>
                          <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                          </div>
                        </div>
                        <div className="sm:ml-20 mt-3 sm:mt-0 flex">
                          <span
                            title="Download"
                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center sm:ml-2"
                          >
                            {" "}
                            <Download className="w-4 h-4" />{" "}
                          </span>
                          <span
                            title="Share"
                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                          >
                            {" "}
                            <Share className="w-4 h-4" />{" "}
                          </span>
                          <span
                            title="Permission"
                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                          >
                            {" "}
                            <MoreHorizontal className="w-4 h-4" />{" "}
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:block dropdown relative ml-3 mt-3">
                        <span className="dropdown-toggle w-4 h-4">
                          {" "}
                          <MoreVertical className="w-4 h-4" />{" "}
                        </span>
                        <div className="dropdown-menu w-40">
                          <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                            <span
                              href=""
                              className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              {" "}
                              <CornerUpLeft className="w-4 h-4 mr-2" /> Reply{" "}
                            </span>
                            <span
                              href=""
                              className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              {" "}
                              <Trash className="w-4 h-4 mr-2" /> Delete{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="clear-both mb-2"></div>
                  {/* <div className="text-gray-600 text-xs">2 mins ago</div> */}
                </div>
              </div>

              {/* <!-- END: Chat Text --> */}
              <div className="clear-both"></div>
              <div className="intro-x chat-text-box flex items-end float-right mb-4">
                <div className="w-full text-right">
                  <div>
                    <div className="chat-text-box__content items-center float-right">
                      {/* <div className="hidden sm:block dropdown relative mr-3 mt-3">
                        <span className="dropdown-toggle w-4 h-4">
                          <MoreVertical className="w-4 h-4" />
                        </span>
                        <div className="dropdown-menu w-40">
                          <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                            <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                              {" "}
                              <CornerUpLeft className="w-4 h-4 mr-2" /> Reply
                            </span>
                            <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                              {" "}
                              <Trash className="w-4 h-4 mr-2" /> Delete{" "}
                            </span>
                          </div>
                        </div>
                      </div> */}
                      {filterUserMessages.map((singleUserMsg) => (
                        <div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3">
                          {singleUserMsg?.text}
                        </div>
                      ))}
                    </div>
                    <div className="clear-both"></div>
                    {/* <div className="chat-text-box__content flex items-center float-right">
                      <div className="hidden sm:block dropdown relative mr-3 mt-3">
                        <span className="dropdown-toggle w-4 h-4">
                          <MoreVertical className="w-4 h-4" />
                        </span>
                        <div className="dropdown-menu w-40">
                          <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                            <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                              {" "}
                              <CornerUpLeft className="w-4 h-4 mr-2" />
                              Reply
                            </span>
                            <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                              {" "}
                              <Trash className="w-4 h-4 mr-2" />
                              Delete{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md text-gray-700 chat-text-box__content__text--image flex justify-end mt-3">
                        <div
                          className="tooltip w-16 h-16 image-fit zoom-in"
                          title="FOOD 1"
                        >
                          <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-md"
                            src={foodImage}
                          />
                        </div>
                        <div
                          className="tooltip w-16 h-16 image-fit ml-2 zoom-in"
                          title="FOOD 2"
                        >
                          <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-md"
                            src={foodImage}
                          />
                        </div>
                        <div
                          className="tooltip w-16 h-16 image-fit ml-2 zoom-in"
                          title="FOOD 3"
                        >
                          <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-md"
                            src={foodImage}
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="clear-both mb-2"></div>
                  <div className="text-gray-600 text-xs text-right">
                    1 mins ago
                  </div>
                </div>
                <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                </div>
              </div>
              {/* ******************************************************** */}
              {/* <!-- END: Chat Text --> */}
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
              <span className="bg-theme-1 text-white w-8 h-8 sm:w-10 sm:h-10 block rounded-full flex-none flex items-center justify-center">
                {" "}
                <Send className="-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </div>
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
