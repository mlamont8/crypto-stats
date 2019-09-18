import React from "react";
import { useSelector } from "react-redux";
import CoinLineChart from "../../components/lineChart/LineChart";
import ImageBlock from "../../components/imageBlock/imageBlock";

// Top Summary information
// Child of Main.js
// Props from Redux State

const Summary = props => {
  const historicalDay = useSelector(state => state.historical.fullHistory);

  return (
    <div className="summary-container">
      <div className="summary-left summary-block">
        <ImageBlock setModal={props.setModal} />
      </div>
      <div className="summary-center summary-block">
        <CoinLineChart title="History" data={historicalDay} />
      </div>
    </div>
  );
};

export default Summary;
