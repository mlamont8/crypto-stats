import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../containers/header/header";
import Summary from "../summary/summary";
import HistoricalChart from "../../components/lineChart/LineChart";
import DailyAreaChart from "../../components/dailyAreaChart/DailyAreaChart";
import ExchangeVolume from "../../components/exchangeVolume/exchangeVolume";
import LiveGrid from "../../components/liveGrid/liveGrid";
import FirstPage from "../../components/firstPage/firstPage";
import News from "../../components/news/news";
import SelectorModal from "../selectorModal/selectorModal";
import ChatForm from "../chatForm/ChatForm";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch(true);
  }

  render() {
    const {
      fifteenDay,
      firstLoad,
      byHour,
      exchangeVolume,
      liveResults,
      inDollars,
      to,
      news
    } = this.props;
    return firstLoad ? (
      <div className="mainContainer">
        <Header firstLoad={firstLoad} />
        <FirstPage />
      </div>
    ) : (
      <div className="mainContainer">
        {this.props.modal && <ChatForm />}
        <Header firstLoad={firstLoad} />
        <div className="dash-container">
          <Summary />
          <div className="chartContainer">
            <div className="info-block">
              <LiveGrid
                liveResults={liveResults}
                usd={inDollars}
                to={to}
                notifyStatus={this.props.notifyStatus}
                from={this.props.from}
                image={this.props.image}
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: bool => {
    dispatch({ type: "INITIAL_MOUNT", status: bool });
  }
});

const mapStateToProps = state => ({
  fifteenDay: state.coinByDay.fifteenDay,
  firstLoad: state.isLoading.firstLoad,
  exchangeVolume: state.topExchanges.data,
  market: state.searchTerm.currentMarket,
  from: state.searchTerm.currentFrom,
  to: state.searchTerm.currentTo,
  liveResults: state.liveResults,
  inDollars: state.byDollar.coinConversion,
  news: state.news.news,
  notifyStatus: state.notification.option,
  byHour: state.coinByHour.coinByHour,
  modal: state.modal.status,
  image: state.coinUrl.convertFrom
});

Main.propTypes = {
  fifteenDay: PropTypes.arrayOf(PropTypes.object),
  exchangeVolume: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired,
  firstLoad: PropTypes.bool,
  byHour: PropTypes.arrayOf(PropTypes.object),
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string,
      price: PropTypes.string,
      time: PropTypes.string
    }).isRequired
  ).isRequired,
  inDollars: PropTypes.number,
  to: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object),
  notifyStatus: PropTypes.string.isRequired
};

Main.defaultProps = {
  fifteenDay: [],
  exchangeVolume: [],
  inDollars: 0,
  to: "",
  firstLoad: true,
  news: [],
  byHour: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
