import React, { useEffect, useState } from "react";
import { ChevronDown, Copy, Search, Share2 } from "react-feather";
import useCreateUser from "../../../hooks/useCreateUser";
import socket from "../../../hooks/useSocket";
import profileImgEx from "../../Image/messageImg.jpeg";

const RecentChats = () => {
  const { usersForDashboard, setUserNames, userNames } = useCreateUser();
  const [usersForAdmin, setUsersForAdmin] = useState();
  const [messegePair, setMessegePair] = useState();

  useEffect(() => {
    socket.on("all_users", (users) => {
      console.log({ users });
      setUsersForAdmin(users);
    });

    socket.on("new_messege", (data) => {
      console.log({ data });

      setMessegePair(data);
    });
  }, []);

  console.log(usersForAdmin);
  console.log(messegePair);
  return (
    <>
      {/* <div className="test-form">
        <form onSubmit={usersForDashboard}>
          <input
            required
            type="text"
            value={userNames}
            onChange={(e) => setUserNames(e.target.value)}
            placeholder="Please Enter Your Name..."
          />
          <button type="submit">Login</button>
        </form>
      </div> */}
      <div
        className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-col overflow-hidden"
        data-content="chats"
      >
        <div className="intro-y text-xl font-medium text-left">Chats</div>
        <div className="intro-y relative mt-5">
          <input
            type="text"
            className="form-control box py-3 px-4 border-transparent pr-8"
            placeholder="Search for messages or users..."
          />
          <Search
            className="text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"
            strokeWidth="1"
          />
        </div>

        {/* RECENT CHATS */}
        <div className="intro-y text-base font-medium leading-tight mt-3 text-left">
          Recent Chats
        </div>
        <div className="intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 pb-8 -mx-5 px-5">
          <div className="intro-x mb-4">
            <div className="zoom-in">
              <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 bg-theme-1 dark:bg-theme-1">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="font-medium text-white">Jhon Doe</span>
                  <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-white">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 20
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="whitespace-nowrap text-opacity-80 text-xs text-white">
                    03:20 PM
                  </div>
                  <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                    <span className="dropdown-toggle block text-opacity-70 text-white">
                      {" "}
                      <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                    </span>
                    <div className="dropdown-menu w-40">
                      <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Share2
                            className="w-4 h-4 mr-2"
                            strokeWidth="1"
                          />{" "}
                          Share Contact{" "}
                        </span>
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Copy className="w-4 h-4 mr-2" strokeWidth="1" /> Copy
                          Contact{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
              </div>
            </div>
          </div>

          <div className="intro-x">
            <div className="zoom-in">
              <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Brad Pitt
                  </span>
                  <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">
                    01:10 PM
                  </div>
                  <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                    <span className="dropdown-toggle block text-opacity-70 text-gray-500">
                      {" "}
                      <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                    </span>
                    <div className="dropdown-menu w-40">
                      <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Share2
                            className="w-4 h-4 mr-2"
                            strokeWidth="1"
                          />{" "}
                          Share Contact{" "}
                        </span>
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Copy className="w-4 h-4 mr-2" strokeWidth="1" /> Copy
                          Contact{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
              </div>
            </div>
          </div>
          <div className="intro-x">
            <div className="zoom-in">
              <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Brad Pitt
                  </span>
                  <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">
                    01:10 PM
                  </div>
                  <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                    <span className="dropdown-toggle block text-opacity-70 text-gray-500">
                      {" "}
                      <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                    </span>
                    <div className="dropdown-menu w-40">
                      <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Share2
                            className="w-4 h-4 mr-2"
                            strokeWidth="1"
                          />{" "}
                          Share Contact{" "}
                        </span>
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Copy className="w-4 h-4 mr-2" strokeWidth="1" /> Copy
                          Contact{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
              </div>
            </div>
          </div>
          <div className="intro-x">
            <div className="zoom-in">
              <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Brad Pitt
                  </span>
                  <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">
                    01:10 PM
                  </div>
                  <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                    <span className="dropdown-toggle block text-opacity-70 text-gray-500">
                      {" "}
                      <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                    </span>
                    <div className="dropdown-menu w-40">
                      <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Share2
                            className="w-4 h-4 mr-2"
                            strokeWidth="1"
                          />{" "}
                          Share Contact{" "}
                        </span>
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Copy className="w-4 h-4 mr-2" strokeWidth="1" /> Copy
                          Contact{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
              </div>
            </div>
          </div>
          <div className="intro-x">
            <div className="zoom-in">
              <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Brad Pitt
                  </span>
                  <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">
                    01:10 PM
                  </div>
                  <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                    <span className="dropdown-toggle block text-opacity-70 text-gray-500">
                      {" "}
                      <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                    </span>
                    <div className="dropdown-menu w-40">
                      <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Share2
                            className="w-4 h-4 mr-2"
                            strokeWidth="1"
                          />{" "}
                          Share Contact{" "}
                        </span>
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Copy className="w-4 h-4 mr-2" strokeWidth="1" /> Copy
                          Contact{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
              </div>
            </div>
          </div>
          <div className="intro-x">
            <div className="zoom-in">
              <div className="chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={profileImgEx}
                  />
                  <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Brad Pitt
                  </span>
                  <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800 dark:text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="whitespace-nowrap text-opacity-80 text-xs text-gray-800 dark:text-gray-600">
                    01:10 PM
                  </div>
                  <div className="chat-list__action dropdown transition duration-200 opacity-0 mt-1 -mb-1 -mr-1 ml-auto">
                    <span className="dropdown-toggle block text-opacity-70 text-gray-500">
                      {" "}
                      <ChevronDown className="w-6 h-6" strokeWidth="1" />{" "}
                    </span>
                    <div className="dropdown-menu w-40">
                      <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Share2
                            className="w-4 h-4 mr-2"
                            strokeWidth="1"
                          />{" "}
                          Share Contact{" "}
                        </span>
                        <span
                          href=""
                          className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          {" "}
                          <Copy className="w-4 h-4 mr-2" strokeWidth="1" /> Copy
                          Contact{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentChats;