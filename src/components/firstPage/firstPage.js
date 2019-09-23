import React, { useState } from "react";
import Header from "../../containers/header/header";
import SelectorModal from "../../containers/selectorModal/selectorModal";
import ChatForm from "../../containers/chatForm/ChatForm";
import { initialSearch } from "../../actions/index";
import { useSelector } from "react-redux";

const FirstPage = () => {
  const [modal, setModal] = useState(false);
  const firstLoad = useSelector(state => state.isLoading.firstLoad);

  return (
    <div className="mainContainer">
      <Header firstLoad={firstLoad} />
      <div className="frontContainer">
        {modal && <ChatForm initialLoad setModal={setModal} />}

        <div className="frontViewArea">
          <div className="titleArea">
            <h2>Cryptocoin price and history data</h2>
            <ul>
              <li>Price analysis</li>
              <li>Short and long term history</li>
              <li>Real time data</li>
            </ul>

            <button type="button" onClick={() => setModal(true)}>
              Try it Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
