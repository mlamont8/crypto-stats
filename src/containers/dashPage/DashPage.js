import React, { useState } from "react";
import Header from "../header/header";
import Summary from "../summary/summary";
import LiveGrid from "../../components/liveGrid/liveGrid";
import DailyAreaChart from "../../components/dailyAreaChart/DailyAreaChart";
import HistoricalChart from "../../components/lineChart/LineChart";
import ExchangeVolume from "../../components/exchangeVolume/exchangeVolume";
import News from "../../components/news/news";
import ChatForm from "../chatForm/ChatForm";

const DashPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="mainContainer">
      <Header />
      <div className="dash-container">
        {modal && <ChatForm initialLoad={false} setModal={setModal} />}
        <Summary setModal={setModal} />
        <div className="chartContainer">
          <div className="info-block">
            <LiveGrid />
          </div>
          <div className="info-block fifteenDayChart">
            <DailyAreaChart />
          </div>

          <div className="info-block">
            <HistoricalChart title="LAST 10 HOURS" />
          </div>
          <div className="info-block">
            <ExchangeVolume />
          </div>
          <div className="info-block">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPage;
