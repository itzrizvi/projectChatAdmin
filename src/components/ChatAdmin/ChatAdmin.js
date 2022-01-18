import React, { useState } from "react";

const ChatAdmin = () => {
  const [botMSG, setBotMSG] = useState("");

  // Automated Messages
  const aboutItConer = "IT-Corner is a well-known software company!!";
  const whatBotChat =
    "Chat Bot is a customizable automated programmed messanger!!";

  // Bot Message Handler Method
  const botMsgHandler = (e) => {
    setBotMSG(e.target.innerText);
    const dataBotValue = e.target.getAttribute("data-bot");
    if (dataBotValue === "1") {
      const msgOne = document.getElementById("botmsg-user-1");
      const botMSgInit = document.getElementById("botMsg-init-1");
      botMSgInit.innerText = e.target.innerText;
      msgOne.style.display = "none";
      const botInit = document.getElementById("botMsg-reply-init-1");
      botInit.innerText = aboutItConer;
    } else if (dataBotValue === "2") {
      const msgOne = document.getElementById("botmsg-user-2");
      const botMSgInit = document.getElementById("botMsg-init-2");
      botMSgInit.innerText = e.target.innerText;
      msgOne.style.display = "none";
      const botInit = document.getElementById("botMsg-reply-init-2");
      botInit.innerText = whatBotChat;
    }
  };
  console.log(botMSG);

  return (
    <div>
      <h2>CHAT BOT</h2>
      <div className="bot-msg-initiated">
        <h3 id="botMsg-init-1"> </h3>
        <h2 id="botMsg-reply-init-1"> </h2>
        <h3 id="botMsg-init-2"> </h3>
        <h2 id="botMsg-reply-init-2"> </h2>
      </div>

      <div className="botMsg-main">
        <div className="botMsg-right">
          <ul className="bot-Msg-activitites">
            <li onClick={botMsgHandler}>
              <h2 id="botmsg-user-1" data-bot="1">
                What is IT-Corner?
              </h2>
              <h2 id="botmsg-user-2" data-bot="2">
                What is Chatbot?
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatAdmin;
