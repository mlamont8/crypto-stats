import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";

const DailyBarChart = props => (
  <div className="info-block">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="time" tick={{ fill: "#F7FDFF" }} />
        <YAxis tick={{ fill: "#F7FDFF" }} domain={["dataMin", "dataMax"]} />
        <CartesianGrid strokeDasharray="3 3" stroke="none" />
        <Tooltip />
        <Legend />
        <Bar dataKey="high" fill="#8884d8" />
        <Bar dataKey="low" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

DailyBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

DailyBarChart.defaultProps = {
  data: []
};

export default DailyBarChart;
