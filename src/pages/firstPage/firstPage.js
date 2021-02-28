import React, { useState } from "react";
import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer"
import ChatForm from "../../components/chatForm/ChatForm";
import dash from "../../images/dash.png"
import { useSelector } from "react-redux";

const FirstPage = () => {
  const [modal, setModal] = useState(false);
  const firstLoad = useSelector(state => state.isLoading.firstLoad);

  return (
    <>
    <div className="mainContainer">
      <Header firstLoad={firstLoad} />
      <div className="frontContainer">
        {modal && <ChatForm initialLoad setModal={setModal} />}

        <div className="topFront">
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
          <div className="frontImage">
          <img src={dash} alt="Dash"/>
        </div>
        </div>


      </div>
      <div style={{height: '150px', overflow: 'hidden'}} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#422168" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,186.7C640,171,800,85,960,69.3C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg></div>

    </div>
    {/* <Footer /> */}
    </>
  );
};
export default FirstPage;
