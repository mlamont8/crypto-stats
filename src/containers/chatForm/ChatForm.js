import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import GetSelections from "../../components/getSelections/getSelections";
import { useSelector } from "react-redux";

function ChatForm() {
  const markets = useSelector(state => state.searchArrays.markets);
  console.log(markets);
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
          //   options: [
          //     { value: 1, label: "Number 1", trigger: "coin-retrieve" },
          //     { value: 2, label: "Number 2", trigger: "coin-retrieve" },
          //     { value: 3, label: "Number 3", trigger: "coin-retrieve" }
          //   ]
          options: { markets }
        },
        {
          id: "coin-retrieve",
          component: <GetSelections />,
          trigger: "market-confirm"
        },
        {
          id: "market-confirm",
          message: "{market-question.value}?  Great!"
        }
      ]}
    />
  );
}

export default ChatForm;
