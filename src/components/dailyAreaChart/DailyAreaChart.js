import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";
import PropTypes from "prop-types";

const DailyAreaChart = props => (
  <div className="info-block">
    <h1>LAST 15 DAYS</h1>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={props.data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" tick={{ fill: "#F7FDFF" }}>
          <Label value="Time" position="insideBottomRight" offset={0} />
        </XAxis>
        <YAxis tick={{ fill: "#F7FDFF" }} mirror={true} domain={["dataMin", "dataMax"]} />
        <CartesianGrid stroke="none" />
        <Tooltip />
        <Legend />
        <Area
          type="linear"
          dataKey="high"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="linear"
          dataKey="low"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

DailyAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DailyAreaChart;
