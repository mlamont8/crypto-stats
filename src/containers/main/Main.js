import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Header from "../../containers/header/header";
import Summary from "../summary/summary";
import HistoricalChart from "../../components/lineChart/LineChart";
import DailyAreaChart from "../../components/dailyAreaChart/DailyAreaChart";
import ExchangeVolume from "../../components/exchangeVolume/exchangeVolume";
import LiveGrid from "../../components/liveGrid/liveGrid";
import FirstPage from "../../components/firstPage/firstPage";
import News from "../../components/news/news";
import ChatForm from "../chatForm/ChatForm";
import DashPage from "../dashPage/DashPage";

const Main = () => {
  const dispatch = useDispatch();
  const firstLoad = useSelector(state => state.isLoading.firstLoad);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch({ type: "INITIAL_MOUNT", status: true });
  }, [dispatch]);

  return firstLoad ? <FirstPage /> : <DashPage />;

  // if (modal) {
  //   return <ChatForm />;
  // } else if (firstLoad) {
  //   return (

  //       <FirstPage />

  //   );
  // } else {
  //   return (
  //     <div className="mainContainer">
  //       <Header firstLoad={firstLoad} />
  //       <div className="dash-container">
  //         <Summary />
  //         <div className="chartContainer">
  //           <div className="info-block">
  //             <LiveGrid
  //               liveResults={liveResults}
  //               usd={inDollars}
  //               to={to}
  //               notifyStatus={notifyStatus}
  //               from={from}
  //               image={image}
  //             />
  //           </div>
  //           <div className="info-block fifteenDayChart">
  //             <DailyAreaChart data={fifteenDay} />
  //           </div>

  //           <div className="info-block">
  //             <HistoricalChart title="LAST 10 HOURS" data={byHour} />
  //           </div>
  //           <div className="info-block">
  //             <ExchangeVolume data={exchangeVolume} />
  //           </div>
  //           <div className="info-block">
  //             <News data={news} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // return firstLoad ? (
  //   <div className="mainContainer">
  //     <Header firstLoad={firstLoad} />
  //     <FirstPage />
  //   </div>
  // ) : (
  //   <div className="mainContainer">
  //     {modal && <ChatForm initialLoad={false} />}
  //     <Header firstLoad={firstLoad} />
  //     <div className="dash-container">
  //       <Summary />
  //       <div className="chartContainer">
  //         <div className="info-block">
  //           <LiveGrid
  //             liveResults={liveResults}
  //             usd={inDollars}
  //             to={to}
  //             notifyStatus={notifyStatus}
  //             from={from}
  //             image={image}
  //           />
  //         </div>
  //         <div className="info-block fifteenDayChart">
  //           <DailyAreaChart data={fifteenDay} />
  //         </div>

  //         <div className="info-block">
  //           <HistoricalChart title="LAST 10 HOURS" data={byHour} />
  //         </div>
  //         <div className="info-block">
  //           <ExchangeVolume data={exchangeVolume} />
  //         </div>
  //         <div className="info-block">
  //           <News data={news} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

// Main.propTypes = {
//   fifteenDay: PropTypes.arrayOf(PropTypes.object),
//   exchangeVolume: PropTypes.arrayOf(PropTypes.object),
//   fetch: PropTypes.func.isRequired,
//   firstLoad: PropTypes.bool,
//   byHour: PropTypes.arrayOf(PropTypes.object),
//   liveResults: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       flag: PropTypes.string,
//       price: PropTypes.string,
//       time: PropTypes.string
//     }).isRequired
//   ).isRequired,
//   inDollars: PropTypes.number,
//   to: PropTypes.string,
//   news: PropTypes.arrayOf(PropTypes.object),
//   notifyStatus: PropTypes.string.isRequired
// };

// Main.defaultProps = {
//   fifteenDay: [],
//   exchangeVolume: [],
//   inDollars: 0,
//   to: "",
//   firstLoad: true,
//   news: [],
//   byHour: []
// };

export default Main;
