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

const CoinLineChart = props => (
  <div className="summary-block lineChart">
    <h1>LAST 10 HOURS</h1>
    <div className="row">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={730}
          height={200}
          data={props.data}
          margin={{
            top: 15,
            right: 20,
            left: 25,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="none" />
          <XAxis dataKey="time" tick={{ fill: "#F7FDFF" }} />
          <YAxis tick={{ fill: "#F7FDFF" }} mirror={true} domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line type="linear" dataKey="open" stroke="#82ca9d" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

CoinLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CoinLineChart;
