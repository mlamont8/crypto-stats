import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";

const CoinLineChart = props => (
  <div className="info-block">
    <h4>LAST 10 HOURS</h4>
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
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

CoinLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CoinLineChart;
