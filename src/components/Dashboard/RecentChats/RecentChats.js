import React, { useEffect, useState } from "react";
import { Search } from "react-feather";
import useAuth from "../../../hooks/useAuth";
import useCreateUser from "../../../hooks/useCreateUser";
import socket from "../../../hooks/useSocket";
import Conversation from "../Conversation/Conversation";

const RecentChats = () => {
  //  Getting Conversation from context
  const { conversations, userData, setCurrentChat } = useAuth();
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

  console.log(conversations);

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
          {conversations &&
            conversations.map((conversation) => (
              <div onClick={() => setCurrentChat(conversation)}>
                <Conversation
                  conversation={conversation}
                  currentUser={userData}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentChats;
