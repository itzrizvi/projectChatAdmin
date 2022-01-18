import { useState } from "react";
import socket from "./useSocket";

const useCreateUser = () => {
  const [userNames, setUserNames] = useState();
  const usersForDashboard = (e) => {
    e.preventDefault();
    socket.emit("new_user", userNames);
  };
  return { usersForDashboard, setUserNames, userNames };
};

export default useCreateUser;
