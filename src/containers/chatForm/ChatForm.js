import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import GetSelections from "../../components/getSelections/getSelections";
import { useSelector } from "react-redux";
import ChatSelector from "../../components/chatSelector/chatSelector";

function ChatForm() {
  return (
    <ChatBot
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
          trigger: "coin-retrieve"
        },
        {
          id: "coin-retrieve",
          component: <GetSelections id={"convertFrom"} />,
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
          trigger: "retrieve-conversion"
        },
        {
          id: "retrieve-conversion",
          component: <GetSelections id={"convertTo"} />,
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
  );
}

export default ChatForm;
