import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import ChatForm from "../../components/chatForm/ChatForm";
import dash from "../../images/dash.png"
import phones from "../../images/phones.png"
import { useSelector } from "react-redux";

const FirstPage = () => {
  const [modal, setModal] = useState(false);
  const firstLoad = useSelector(state => state.isLoading.firstLoad);

  return (
    <>
    <div className="frontContainer">
      <Header firstLoad={firstLoad} />
      <div className="frontTopContainer">
        {modal && <ChatForm initialLoad setModal={setModal} />}

        <div className="topFront">
          <div className="titleArea">
            <h1>Cryptocoin Price and History</h1>
            <ul>
              <li>Cost analysis</li>
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
      <div className="curve" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#422168" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,186.7C640,171,800,85,960,69.3C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg></div>
      <div className="frontInfo">
        <div className="frontInfoImage"><img src={phones} alt="responsive for smartphones"></img></div>
        <div className='frontInfoText'>
          <p className="featureTitle">Main Feature</p>
          <h1>View long-term and short-term history</h1>
            <p>A visual aide to see updates on coin pairs from various markets.  Results offer short and long term history, popular crypto markets and real-time rates.</p>
          </div> 

    </div>

</div>
<div className="callToAction">
      <h1>TRY CRYPTOSTATS FOR FREE</h1>
      <p>Available on your computer, tablet or mobile.  Runs directly in your browser.  For a limited time, try completely free.</p>
      <button type="button" onClick={() => setModal(true)}>
              Try Now
            </button>
    </div>

    <Footer />
    </>
  );
};
export default FirstPage;
