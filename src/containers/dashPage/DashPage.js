import React, { useSelector, useState } from "react";
import Header from "../header/header";
import Summary from "../summary/summary";
import LiveGrid from "../../components/liveGrid/liveGrid";
import DailyAreaChart from "../../components/dailyAreaChart/DailyAreaChart";
import HistoricalChart from "../../components/lineChart/LineChart";
import ExchangeVolume from "../../components/exchangeVolume/exchangeVolume";
import News from "../../components/news/news";
import { useDispatch } from "react-redux";

const DashPage = () => {
  const dispatch = useDispatch();
  //   const fifteenDay = useSelector(state => state.coinByDay.fifteenDay);
  //   const firstLoad = useSelector(state => state.isLoading.firstLoad);
  //   const exchangeVolume = useSelector(state => state.topExchanges.data);
  // const market = useSelector(state => state.searchTerm.currentMarket);
  //   const from = useSelector(state => state.searchTerm.currentFrom);
  //   const to = useSelector(state => state.searchTerm.currentTo);
  //   const liveResults = useSelector(state => state.liveResults);
  //   const inDollars = useSelector(state => state.byDollar.coinConversion);
  //   const news = useSelector(state => state.news.news);
  //   const notifyStatus = useSelector(state => state.notification.option);
  //   const byHour = useSelector(state => state.coinByHour.coinByHour);
  //   const modal = useSelector(state => state.modal.status);
  //   const image = useSelector(state => state.coinUrl.convertFrom);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mainContainer">
      <Header />
      <div className="dash-container">
        <Summary />
        <div className="chartContainer">
          <div className="info-block">
            <LiveGrid />
          </div>
          <div className="info-block fifteenDayChart">
            <DailyAreaChart />
          </div>

          {/*    <div className="info-block">
            <HistoricalChart title="LAST 10 HOURS" data={byHour} />
          </div>
          <div className="info-block">
            <ExchangeVolume data={exchangeVolume} />
          </div>
          <div className="info-block">
            <News data={news} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashPage;
