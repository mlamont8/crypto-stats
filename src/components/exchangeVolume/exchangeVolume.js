import React from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from "recharts";
import PropTypes from "prop-types";

const COLORS = ["#3c4eba", "#fffefb", "#3cddf1", "#1b6ff3"];

const exchangeVolume = props => {
  const { data } = props;
  return !data ? null : (
    <div className="pieChart infoBlock">
      <div className="blockTitle">
        <h1>VOLUME BY EXCHANGE</h1>
      </div>
      <ResponsiveContainer width="80%" height={200}>
        <PieChart>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            height={36}
          />
          <Pie
            data={data}
            dataKey="VOLUME24HOUR"
            nameKey="MARKET"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
          >
            {data.map((MARKET, index) => (
              <Cell key={MARKET} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

exchangeVolume.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default exchangeVolume;
