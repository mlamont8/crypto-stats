import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";
import Live from "../live/live";

const CoinLineChart = props => (
  <div className="info-block">
    <h4>LAST 10 HOURS</h4>
    <div className="row">
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          width={730}
          height={150}
          data={props.data}
          margin={{
            top: 15,
            right: 20,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="5  5" stroke="none" />
          <XAxis dataKey="time" tick={{ fill: "#F7FDFF" }} />
          <YAxis tick={{ fill: "#F7FDFF" }} />
          <Tooltip />
          <Line type="monotone" dataKey="open" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="row">
      <Live price={props.price} exchange={props.exchange} flag={props.flag} />
    </div>
  </div>
);

CoinLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.string,
  exchange: PropTypes.string,
  flag: PropTypes.string
};

export default CoinLineChart;
