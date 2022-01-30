import { faChevronLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "simplebar/dist/simplebar.min.css";
import socket from "../../hooks/useSocket";
// import { io } from "socket.io-client";
import prof2 from "../Image/m2essageImg.jpg";
import prof1 from "../Image/messageImg.jpeg";
import prof3 from "../Image/messageImg3.jpg";
import MessegeArea from "../MessegeArea/MessegeArea";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
import UserComp from "../UserComp/UserComp";
import "./MessageDetails.css";

// Declaring Socket server URL
// const socket = io("http://localhost:5000/");

const MessageDetails = ({ pageChange, presentPage }) => {
  // All States Here
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [receiver, setReceiver] = useState("");
  const [media, setMedia] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [users, setUsers] = useState({});
  const [messege, setMessege] = useState("");
  const [twinMessege, setTwinMessege] = useState({});
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojiOn, setEmojiOn] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState("");
  const [admin, setAdmin] = useState("");
  const [allAdmin, setAllAdmin] = useState("");
  const [typingKeys, setTypingKeys] = useState("");
  const [userTyping, setUserTyping] = useState("");
  const receiverRef = useRef(null);

  // Emoji Click function
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMessege(chosenEmoji.emoji);
    setEmojiOn(false);
  };

  // User Typing Notification status showing
  const typingNotification = () => {
    let typedMessage = document.getElementById("chatInput").value;
    setTypingKeys(typedMessage);
    socket.emit("typingProcess", typingKeys);
  };

  // Sorting the names of messege pair
  const sortNames = (username1, username2) => {
    return [username1, username2].sort().join("-");
  };

  // Top to bottom scroll function
  const gotoBottom = () => {
    const msgElements = document.querySelector("ul.msg-list");
    if (msgElements) {
      msgElements.scrollTop = msgElements.scrollHeight;
    }
  };

  // Creating user function
  const onCreateUser = () => {
    setCheckAdmin(userName);
    socket.emit("new_user", userName);
    const confAvatar = Math.floor(Math.random() * 2) + ".png";
    setAvatar(confAvatar);
    setStep((prevStep) => prevStep + 1);
  };

  // User Select function from online users and admins
  const onUserSelect = (username) => {
    setReceiver(username);
    receiverRef.current = username;
    console.log(receiverRef);
    setStep((prevStep) => prevStep + 1);
  };

  // Chat Close function
  const onChatClose = () => {
    setStep(1);
    receiverRef.current = null;
  };

  // Sending Messeges
  const sendMessege = (e) => {
    e.preventDefault();
    const data = {
      sender: userName,
      receiver,
      messege,
      media,
      avatar,
      view: false,
    };

    // Sending MSGs to socket
    socket.emit("send_messege", data);

    const key = sortNames(userName, receiver);
    const tempTwinMessege = { ...twinMessege };
    if (key in tempTwinMessege) {
      tempTwinMessege[key] = [...tempTwinMessege[key], { ...data, view: true }];
    } else {
      tempTwinMessege[key] = [{ ...data, view: true }];
    }

    setTwinMessege({ ...tempTwinMessege });

    // Clearing Media from MSG part
    if (media !== null) {
      setMedia(null);
    }

    // Clearing MSGs and User Typing notification
    setMessege("");
    setTypingKeys("");
  };

  // Check Unseen Messeges and Show notification on Tab
  const checkUnseenMesseges = (receiver) => {
    const key = sortNames(userName, receiver);
    let unseenMsg = [];
    if (key in twinMessege) {
      unseenMsg = twinMessege[key].filter((msg) => !msg.view);
    }

    if (unseenMsg.length > 0) {
      setTimeout(() => {
        document.title = "(" + unseenMsg.length + ") IT-Corner ChatApp";
      }, 1000);
    } else if (unseenMsg.length === 0) {
      document.title = "IT-Corner Chat App";
    }

    return unseenMsg.length;
  };

  // ALL ADMINS DATA
  useEffect(() => {
    const allAdminURL = `http://localhost:5000/admins/`;
    fetch(allAdminURL)
      .then((res) => res.json())
      .then((data) => setAllAdmin(data));
  }, []);

  // ADMIN LOGIN DATA
  useEffect(() => {
    const adminURL = `http://localhost:5000/admins/${checkAdmin}`;
    fetch(adminURL)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [checkAdmin]);

  // Socket On for all users and new messeges
  useEffect(() => {
    socket.on("all_users", (users) => {
      console.log({ users });
      setUsers(users);
    });

    socket.on("new_messege", (data) => {
      console.log(data);

      setTwinMessege((prevTwinMessege) => {
        const messeges = { ...prevTwinMessege };
        const key = sortNames(data.sender, data.receiver);

        if (receiverRef.current === data.sender) {
          data.view = true;
        }
        if (key in messeges) {
          messeges[key] = [...messeges[key], data];
        } else {
          messeges[key] = [data];
        }

        return { ...messeges };
      });
    });
  }, []);

  // Updating the messeges after user viewing
  const updateMessegeView = () => {
    const key = sortNames(userName, receiver);

    if (key in twinMessege) {
      const messeges = twinMessege[key].map((msg) =>
        !msg.view ? { ...msg, view: true } : msg
      );
      twinMessege[key] = [...messeges];
      setTwinMessege({ ...twinMessege });
      console.log(twinMessege);
    }
  };

  // Rendering Messeges
  useEffect(() => {
    // Updating View for seen MSG
    updateMessegeView();
  }, [receiver]);

  // Top to Bottom Rendering
  useEffect(() => {
    const key = sortNames(userName, receiver);
    if (key in twinMessege) {
      if (twinMessege[key].length > 0) {
        gotoBottom();
      }
    }
  }, [twinMessege]);

  // Typing Notification useEffect render
  useEffect(() => {
    socket.on("typingProcess", (typingKeys) => {
      setUserTyping(typingKeys);
      setTimeout(() => {
        setUserTyping("");
      }, 5000);
    });
  }, [typingKeys]);

  // useEffect(()=>{
  //     fetch('http://localhost:5000/msghistory', {
  //         method:'POST',
  //         headers:{
  //             'content-type':'application/json'
  //         },
  //         body: JSON.stringify(twinMessege)
  //     })
  // },[]);

  // FontAwesome Icons
  const clockIcon = (
    <FontAwesomeIcon
      icon={faClock}
      style={{ color: "white" }}
      className="fas fa-camera clock-Icon"
    />
  );

  const msgDetailIcon = (
    <FontAwesomeIcon
      icon={faChevronLeft}
      style={{ color: "white" }}
      className="fas fa-camera"
    />
  );
  return (
    <div className="chat-popup-content">
      <div className="msdDetailImg text-white">
        <div className="top-area">
          <div className="top-button">
            {/* Conditional back button rendering */}
            {step === 0 ? (
              <>
                <button
                  onClick={() => pageChange("modal")}
                  type="button"
                  className="gotoFront btn backBtn animate__animated animate__slideInUp animate__delay-0.5s"
                >
                  {msgDetailIcon}
                </button>
              </>
            ) : (
              <>
                {step === 1 ? (
                  <button
                    onClick={() => pageChange("modal")}
                    type="button"
                    className="gotoFront btn backBtn animate__animated animate__slideInUp animate__delay-0.5s"
                  >
                    {msgDetailIcon}
                  </button>
                ) : (
                  <button
                    onClick={onChatClose}
                    type="button"
                    className="btn backBtn animate__animated animate__slideInUp animate__delay-0.5s"
                  >
                    {msgDetailIcon}
                  </button>
                )}
              </>
            )}
          </div>

          <div className="top-texts">
            <h4>IT-Corner</h4>
            <p>
              We help your business grow by connecting <br /> you to your
              customers.
            </p>
          </div>
        </div>
        <div className="p-2 w-100 animate__animated animate__fadeInRight animate__delay-0.5s">
          <div className="bottom-area">
            <div className="image-holder-2">
              <img className="image1-2" src={prof1} alt="..." />
              <img className="image2-2" src={prof2} alt="..." />
              <img className="image3-2" src={prof3} alt="..." />
            </div>
            <div className="text-holder text-white">
              <p className="usual-reply-1">Our usual reply time</p>
              <p className="usual-reply-2">
                <span>{clockIcon}</span>
                <b> A few minutes</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* messege history part      */}

      <div
        id="chat-container"
        className="d-flex align-items-start flex-column bd-highlight"
      >
        {/* Chatbox parts by different components */}
        {/* User Component */}
        {step === 0 ? (
          <UserComp
            onCreateUser={onCreateUser}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        ) : null}

        {/* Online user component */}
        {step === 1 ? (
          <OnlineUsers
            onUserSelect={onUserSelect}
            users={users}
            checkAdmin={checkAdmin}
            admin={admin}
            allAdmin={allAdmin}
            setStep={setStep}
            checkUnseenMesseges={checkUnseenMesseges}
            userName={userName}
          />
        ) : null}

        {/* Main messege area component */}
        {step === 2 ? (
          <MessegeArea
            sendMessege={sendMessege}
            socket={socket}
            value={messege}
            onEmojiClick={onEmojiClick}
            setMedia={setMedia}
            sortNames={sortNames}
            media={media}
            setEmojiOn={setEmojiOn}
            emojiOn={emojiOn}
            checkAdmin={checkAdmin}
            admin={admin}
            allAdmin={allAdmin}
            typingNotification={typingNotification}
            userName={userName}
            receiver={receiver}
            userTyping={userTyping}
            twinMessege={twinMessege}
            onChange={(e) => setMessege(e.target.value)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MessageDetails;
