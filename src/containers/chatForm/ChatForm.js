import React, { useRef, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import ChatSelector from "../../components/chatSelector/chatSelector";
import GetCurrentMarket from "../../components/getCurrentMarket/GetCurrentMarket";
import { useDispatch } from "react-redux";

const ChatForm = props => {
  const dispatch = useDispatch();

  const CloseModal = () => {
    props.setModal(false);
    return null;
  };

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
      component: <ChatSelector id={"convertTo"} />,
      waitAction: true,
      trigger: "conclusion"
    },
    {
      id: "conclusion",
      message: "Looks Good...See you soon!",
      trigger: "closeModal"
    },
    {
      id: "closeModal",
      component: <CloseModal />,
      end: true
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
      component: <ChatSelector id={"convertTo"} />,
      waitAction: true,
      trigger: "conclusion"
    },
    {
      id: "conclusion",
      message: "Looks Good...See you soon!",
      trigger: "closeModal"
    },
    {
      id: "closeModal",
      component: <CloseModal />,
      end: true
    }
  ];

  const chatOption = props.initialLoad ? initialSteps : returningSteps;

  const useOutsideAlerter = (ref, props) => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch({ type: "NEW_RESET" }); // reset current array items
        CloseModal(); // Close Modal
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="modalContainer">
      <div ref={wrapperRef} className="modalContent">
        <ChatBot width="none" steps={chatOption} />
      </div>
    </div>
  );
};

export default ChatForm;
