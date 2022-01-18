import axios from "axios";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
const useCredentials = () => {
  // State for  Token
  const [token, setToken] = useState("");
  // State for user data
  const [userData, setUserData] = useState({});
  // Get token and decode it
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let userToken = localStorage.getItem("token");
      let decodedToken = decodeToken(userToken);
      setToken(decodedToken);
      console.log(decodedToken);
      localStorage.setItem("user_data", decodedToken);
    }
  }, []);

  // Fetching data by  token  user
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/userdata/" + token._id
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [token._id]);

  return { token };
};

export default useCredentials;
