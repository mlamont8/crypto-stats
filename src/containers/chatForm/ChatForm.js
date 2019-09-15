import React from "react";
import ChatBot from "react-simple-chatbot";
import ChatSelector from "../../components/chatSelector/chatSelector";
import GetCurrentMarket from "../../components/getCurrentMarket/GetCurrentMarket";

const ChatForm = props => {
  const initialSteps = [
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
  ];

  const returningSteps = [
    {
      id: "Intro",
      message: "Welcome Back!",
      trigger: "market-confirm"
    },
    {
      id: "market-confirm",
      message: "Would you like to get information from your current market?",
      trigger: "previous-market-answer"
    },
    {
      id: "previous-market-answer",
      options: [
        { value: "yes", label: "Yes", trigger: "retrieve-market" },
        { value: "no", label: "No", trigger: "market-question" }
      ]
    },
    {
      id: "retrieve-market",
      component: <GetCurrentMarket />,
      waitAction: true,
      trigger: "coin-question"
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
  ];

  const chatOption = props.initialLoad ? initialSteps : returningSteps;

  return (
    <div className="modalContainer">
      <div className="modalContent">
        <ChatBot width="none" steps={chatOption} />
      </div>
    </div>
  );
};

export default ChatForm;
