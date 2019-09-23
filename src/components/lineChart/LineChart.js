// Change to Area Chart

import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";

const CoinLineChart = props => {
  const data = useSelector(state => state.coinByHour.coinByHour);

  return (
    <div className="infoBlock">
      <div className="blockTitle">
        <h1>{props.title}</h1>
      </div>

      <ResponsiveContainer width="95%" height={200}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 15,
            right: 10,
            left: 50,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fill: "#E3E3E3" }} />
          <YAxis
            tick={{ fill: "#E3E3E3" }}
            mirror={false}
            domain={["dataMin", "dataMax"]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="high"
            stroke="#2ecc71"
            strokeWidth={3}
            fill="#78e08f"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

CoinLineChart.propTypes = {
  title: PropTypes.string.isRequired
};

export default CoinLineChart;
