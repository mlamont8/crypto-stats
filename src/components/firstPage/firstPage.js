import React from "react";
import SelectorModal from "../../containers/selectorModal/selectorModal";
import ChatForm from "../../containers/chatForm/ChatForm";
import { useDispatch, useSelector } from "react-redux";

const FirstPage = () => {
  const dispatch = useDispatch();

  const modal = useSelector(state => state.modal.status);

  return (
    <div className="frontContainer">
      {modal && <ChatForm />}

      <div className="frontViewArea">
        <div className="titleArea">
          <h2>Cryptocoin price and history data</h2>
          <ul>
            <li>Price analysis</li>
            <li>Short and long term history</li>
            <li>Real time data</li>
          </ul>

          <button
            type="button"
            onClick={() => dispatch({ type: "SEARCH_MODAL_REQUEST" })}
          >
            Try it Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
