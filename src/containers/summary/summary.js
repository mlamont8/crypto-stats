import React from "react";
import ImageBlock from "../../components/imageBlock/imageBlock";
import FullHistoryChart from "../../components/fullHistoryChart/FullHistoryChart";

// Top Summary information
// Child of Main.js
// Props from Redux State

const Summary = props => {
  return (
    <div className="summary-container">
      <div className="summary-left summary-block">
        <ImageBlock setModal={props.setModal} />
      </div>
      <div className="summary-center summary-block">
        <FullHistoryChart />
      </div>
    </div>
  );
};

export default Summary;
