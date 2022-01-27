import axios from "axios";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
const useCredentials = () => {
  // State for  Token
  const [token, setToken] = useState("");

  // State for user data
  const [userData, setUserData] = useState({});

  // Conversation getting state
  const [conversations, setConversations] = useState(null);

  // Selecting Chat State
  const [currentChat, setCurrentChat] = useState(null);

  // Get Selected Id Messages
  const [messages, setMessages] = useState([]);

  // Get token and decode it
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let userToken = localStorage.getItem("token");
      let decodedToken = decodeToken(userToken);
      setToken(decodedToken);
    }
  }, []);

  // Fetching data by  token  user
  useEffect(() => {
    //  If token exist
    if (token._id) {
      const getUserData = async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/userdata/" + token._id
          );
          setUserData(res);
        } catch (error) {
          console.log(error);
        }
      };
      getUserData();
    }
  }, [token._id]);

  //  Get Conversations
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/conversations/" + userData?.data._id
        );
        console.log(res);
        setConversations(res.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getConversations();
  }, [userData]);

  //  Getting the  Selected ID Messages
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/messages/" + currentChat?._id
        );
        setMessages(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat?._id]);

  return {
    token,
    userData,
    conversations,
    setCurrentChat,
    currentChat,
    messages,
    setMessages,
  };
};

export default useCredentials;
