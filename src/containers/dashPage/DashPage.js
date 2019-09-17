import React from "react";
import Header from "../header/header";
import Summary from "../summary/summary";
import LiveGrid from "../../components/liveGrid/liveGrid";
import DailyAreaChart from "../../components/dailyAreaChart/DailyAreaChart";
import HistoricalChart from "../../components/lineChart/LineChart";
import ExchangeVolume from "../../components/exchangeVolume/exchangeVolume";
import News from "../../components/news/news";

const DashPage = () => {
  <div className="mainContainer">
    <Header firstLoad={firstLoad} />
    <div className="dash-container">
      <Summary />
      <div className="chartContainer">
        <div className="info-block">
          <LiveGrid
            liveResults={liveResults}
            usd={inDollars}
            to={to}
            notifyStatus={notifyStatus}
            from={from}
            image={image}
          />
        </div>
        <div className="info-block fifteenDayChart">
          <DailyAreaChart data={fifteenDay} />
        </div>

        <div className="info-block">
          <HistoricalChart title="LAST 10 HOURS" data={byHour} />
        </div>
        <div className="info-block">
          <ExchangeVolume data={exchangeVolume} />
        </div>
        <div className="info-block">
          <News data={news} />
        </div>
      </div>
    </div>
  </div>;
};

export default DashPage;
