import React from "react";
import ChatBot from "react-simple-chatbot";
import ChatSelector from "../../components/chatSelector/chatSelector";

function ChatForm() {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <ChatBot
          width="none"
          steps={[
            {
              id: "Intro",
              message: "Hi There!",
              trigger: "market-question"
            },
            {
              id: "market-question",
              message: "Let's start by selecting a crypto market",
              trigger: "market"
            },
            {
              id: "market",
              component: <ChatSelector id={"market"} />,
              waitAction: true,
              trigger: "coin-question"
            },

            {
              id: "coin-question",
              message: "Great! Which Coin would you like info on?",
              trigger: "convertFrom"
            },
            {
              id: "convertFrom",
              component: <ChatSelector id={"convertFrom"} />,
              waitAction: true,
              trigger: "convert-question"
            },
            {
              id: "convert-question",
              message: "Cool! What would you like it converted into?",
              trigger: "convertTo"
            },
            {
              id: "convertTo",
              component: <ChatSelector id={"convertTo"} />
            }
          ]}
        />
      </div>
    </div>
  );
}

export default ChatForm;
