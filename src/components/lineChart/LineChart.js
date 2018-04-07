import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const CoinLineChart = props => (
  <div className="info-block">
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        width={730}
        height={300}
        data={props.data}
        margin={{
 top: 5, right: 30, left: 20, bottom: 5,
}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);


CoinLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoinLineChart;
