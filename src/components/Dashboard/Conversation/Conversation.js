import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChevronDown, Copy, Share2 } from "react-feather";
import profileImgEx from "../../Image/messageImg.jpeg";

const Conversation = ({ conversation, currentUser }) => {
  // Set logged in user conversation
  const [user, setUser] = useState(null);

  // Fetching by  user  id
  useEffect(() => {
    // Finding others user
    const friendId = conversation.members.find(
      (foundId) => foundId !== currentUser.data._id
    );
    console.log(friendId, currentUser.data._id);
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

  return (
    <>
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
              <span className="font-medium text-white">
                {user?.data.firstName} {user?.data.lastName}
              </span>
              <div className="text-opacity-80 w-4/5 truncate mt-0.5 text-white">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 20
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
                      <Share2 className="w-4 h-4 mr-2" strokeWidth="1" /> Share
                      Contact{" "}
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
    </>
  );
};

export default Conversation;
