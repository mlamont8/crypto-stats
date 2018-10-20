import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const CoinLineChart = props => (
  <div className="infoBlock">
    <div className="blockTitle">
      <h1>{props.title}</h1>
    </div>

    <ResponsiveContainer width="80%" height={200}>
      <LineChart
        data={props.data}
        margin={{
          top: 15,
          right: 10,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="none" />
        <XAxis dataKey="time" tick={{ fill: '#E3E3E3' }} />
        <YAxis
          tick={{ fill: '#E3E3E3' }}
          mirror={false}
          domain={['dataMin', 'dataMax']}
        />
        <Tooltip />
        <Line type="linear" dataKey="open" stroke="#00B5FF" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>

);

CoinLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default CoinLineChart;
