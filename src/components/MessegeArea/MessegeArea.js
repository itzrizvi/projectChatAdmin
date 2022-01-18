import Picker from "emoji-picker-react";
import React from "react";
import "simplebar/dist/simplebar.min.css";
import { format } from "timeago.js";
import attachmentElement from "../../images/attachment-element.png";

const MessegeArea = (props) => {
  // All props
  const {
    admin,
    typingNotification,
    userTyping,
    sendMessege,
    value,
    onChange,
    twinMessege,
    sortNames,
    userName,
    receiver,
    setMedia,
    media,
    onEmojiClick,
    emojiOn,
    setEmojiOn,
  } = props;

  // Getting the present msg sending time
  const getInstantMSGTime = new Date(Date.now());
  const createdAt = getInstantMSGTime.toString();

  // Enter button press send msg function
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessege(e);
    }
    console.log(e.target.value);
  };

  const messeges = twinMessege
    ? twinMessege[sortNames(userName, receiver)]
    : [];
  // Media attachment cancellation
  const dismisMedia = () => {
    setMedia("");
    document.getElementById("attch-name").style.display = "none";
  };

  return (
    <div style={{ width: "100%" }} className="messege-contnr">
      {/* <div className="chat-with-user-header">
        <h2>{receiver}</h2>
      </div> */}
      <ul className="msg-list" id="msg-list">
        {messeges && messeges.length > 0
          ? messeges.map((messege, index) => (
              <li
                key={index}
                className={`${
                  userName === messege.receiver
                    ? `left-side-msg`
                    : `right-side-msg`
                }`}
              >
                <div className="msgBox">
                  {/* <div className="user-icon">
                    <img
                      src={require(`../../images/usersAvatar/${messege.avatar}`)}
                      alt="USERPHOTO"
                    />
                  </div> */}
                  <div>
                    {messege.media && messege.media.image ? (
                      <div className="image-messege animate__animated animate__headShake">
                        <img src={messege.media.content} alt="IMG" />
                        <span className="msg-time-count">
                          {format(createdAt)}
                        </span>
                      </div>
                    ) : null}
                    {messege.messege !== "" ? (
                      <>
                        <div className="messege-style animate__animated animate__headShake">
                          {messege.messege}
                        </div>
                        <span className="msg-time-count">
                          {format(createdAt)}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
              </li>
            ))
          : null}
        <li>
          {userTyping && admin?.role === "Admin" ? (
            <p className="typing-tag">
              {receiver} : {userTyping}
            </p>
          ) : null}
        </li>
      </ul>
      <div className="msg-inputBox picker-container">
        {media !== null ? (
          <div className="attachment-name" id="attch-name">
            <img src={attachmentElement} alt="ATTCHMNTNAME" />
            <span>{media.name}</span>
            <span onClick={() => dismisMedia()} className="remove-attachment">
              X
            </span>
          </div>
        ) : null}
        <form onSubmit={sendMessege}>
          <textarea
            id="chatInput"
            onKeyPress={handleKeyPress}
            onKeyUp={(e) => typingNotification(e)}
            value={value}
            onChange={onChange}
            placeholder="Write a reply..."
          />
          {emojiOn && (
            <div className="emoji-div">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
          {/* <img
            className="emoji-icon"
            alt="EMOJI"
            onClick={() => setEmojiOn(true)}
            src={svgImage}
          /> */}

          <svg
            className="emoji-icon"
            onClick={() => setEmojiOn(true)}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 18 18"
          >
            <path
              d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm0 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM5 6.999a1 1 0 1 1 2.002.004A1 1 0 0 1 5 6.999zm5.999 0a1.002 1.002 0 0 1 2.001 0 1 1 0 1 1-2.001 0zM8.959 13.5c-.086 0-.173-.002-.26-.007-2.44-.132-4.024-2.099-4.09-2.182l-.31-.392.781-.62.312.39c.014.017 1.382 1.703 3.37 1.806 1.306.072 2.61-.554 3.882-1.846l.351-.356.712.702-.35.356c-1.407 1.427-2.886 2.15-4.398 2.15z"
              fillRule="evenodd"
            ></path>
          </svg>

          <input
            type="file"
            id="attchInput"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function () {
                console.log(reader.result);
                setMedia({
                  image: true,
                  content: reader.result,
                  name: file.name,
                });
              };
              reader.onerror = function (error) {
                console.log(error);
              };
            }}
          />
          <label htmlFor="attchInput">
            {/* <img
              className="attachment-icon"
              alt="ATTACHMENT"
              src={attachmentImg}
            /> */}
            <svg
              className="attachment-icon"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 16 18"
            >
              <path
                d="M14.154 6.918l-.004.003.001-.004-3.287 3.286-.006-.005-3.574 3.574c-.016.017-.03.036-.048.053l-.05.047-.043.041v-.002c-1.167 1.07-2.692 1.331-3.823.2-1.13-1.13-.89-2.677.18-3.843l-.005-.004.074-.073.016-.018c.006-.005.012-.009.017-.016l6.053-6.053.761.76-6.053 6.054-.029.028v.001l-.005.004-.073.074c.011-.01.025-.018.035-.03-.688.75-.93 1.636-.21 2.356.72.72 1.583.456 2.333-.232l-.03.034.04-.042.01-.008.008-.009.033-.03.031-.034.01-.009.007-.009 5.004-5.003.005.006 1.858-1.859c1.223-1.218 1.51-2.913.291-4.132C12.462.806 10.414.74 9.195 1.958L2.248 8.905c.003 0 .006-.002.008-.004-1.625 1.667-1.542 4.43.103 6.074 1.646 1.646 4.474 1.795 6.141.17-.003.002-.004.008-.008.012l.047-.047 6.053-6.054.042-.042.743.78-.025.021.001.002-6.05 6.05-.002.002-.002.001-.046.046h-.002c-2.094 2.04-5.578 1.894-7.652-.18-2.049-2.049-2.15-5.407-.183-7.505l-.006-.005h-.002l.076-.078 6.943-6.944.003-.002.004-.005c1.641-1.64 4.367-1.574 6.008.066 1.64 1.642 1.353 4.014-.288 5.655z"
                fillRule="evenodd"
              ></path>
            </svg>
          </label>
        </form>
      </div>
    </div>
  );
};

export default MessegeArea;
